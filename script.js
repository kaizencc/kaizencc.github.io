// Active nav highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-30% 0px -60% 0px' }
);
sections.forEach((s) => navObserver.observe(s));

// GitHub activity feed
(function () {
  const CACHE_KEY = 'gh_activity_v1';
  const CACHE_TTL = 60 * 60 * 1000; // 1 hour
  const ORGS = ['aws/', 'cdklabs/'];

  const SVG = {
    pr:     '<svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"/></svg>',
    merge:  '<svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"/></svg>',
    commit: '<svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"/></svg>',
    issue:  '<svg viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/></svg>',
  };

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function timeAgo(iso) {
    const diff = (Date.now() - new Date(iso)) / 1000;
    if (diff < 60)    return 'just now';
    if (diff < 3600)  return Math.floor(diff / 60) + 'm ago';
    if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
    return Math.floor(diff / 86400) + 'd ago';
  }

  function eventToHTML(e) {
    const repo    = e.repo.name;
    const repoUrl = 'https://github.com/' + repo;
    const time    = timeAgo(e.created_at);
    let icon, iconClass, label, title, url;

    if (e.type === 'PullRequestEvent') {
      // Public events API uses action='merged' directly (payload is truncated, no pr.merged field)
      const pr     = e.payload.pull_request;
      const action = e.payload.action;
      if (!['opened', 'merged', 'closed'].includes(action)) return '';
      const merged = action === 'merged';
      icon      = merged ? SVG.merge : SVG.pr;
      iconClass = merged ? 'activity-icon--merge' : 'activity-icon--pr';
      label     = merged ? 'merged PR' : action === 'closed' ? 'closed PR' : 'opened PR';
      title     = '#' + pr.number + ' → ' + pr.base.ref;
      url       = repoUrl + '/pull/' + pr.number;
    } else if (e.type === 'PushEvent') {
      // Commits are not included in the public events payload; ref is available
      const branch = (e.payload.ref || '').replace('refs/heads/', '');
      if (!branch) return '';
      icon      = SVG.commit;
      iconClass = 'activity-icon--commit';
      label     = 'pushed';
      title     = 'to ' + branch;
      url       = repoUrl + '/tree/' + branch;
    } else if (e.type === 'IssuesEvent') {
      // Issue title is included in the public events payload
      if (!['opened', 'closed'].includes(e.payload.action)) return '';
      icon      = SVG.issue;
      iconClass = 'activity-icon--issue';
      label     = e.payload.action + ' issue';
      title     = e.payload.issue.title;
      url       = e.payload.issue.html_url;
    } else {
      return '';
    }

    return `<div class="activity-item">
  <span class="activity-icon ${iconClass}">${icon}</span>
  <div class="activity-body">
    <p class="activity-line">
      <span class="activity-event-label">${label}</span><a href="${esc(url)}" target="_blank" rel="noopener" class="activity-title">${esc(title)}</a>
    </p>
    <div class="activity-meta">
      <a href="${esc(repoUrl)}" target="_blank" rel="noopener" class="activity-repo">${esc(repo)}</a>
      <span>&middot;</span>
      <span>${time}</span>
    </div>
  </div>
</div>`;
  }

  function render(events, container) {
    const items = events
      .filter(e => ORGS.some(o => e.repo.name.startsWith(o)))
      .filter(e => ['PullRequestEvent', 'PushEvent', 'IssuesEvent'].includes(e.type))
      .map(eventToHTML)
      .filter(Boolean)
      .slice(0, 8);

    container.innerHTML = items.length
      ? items.join('')
      : '<p class="activity-empty">No recent public activity found.</p>';
  }

  async function load() {
    const container = document.getElementById('activity-feed');
    if (!container) return;

    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
      if (cached && Date.now() - cached.ts < CACHE_TTL) {
        render(cached.data, container);
        return;
      }
    } catch (_) {}

    try {
      const res = await fetch('https://api.github.com/users/kaizencc/events/public?per_page=100');
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data })); } catch (_) {}
      render(data, container);
    } catch (_) {
      const el = document.getElementById('activity-feed');
      if (el) el.innerHTML = '<p class="activity-empty">Could not load recent activity.</p>';
    }
  }

  load();
})();
