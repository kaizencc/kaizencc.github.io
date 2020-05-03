import React from 'react';
import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiImage,
  EuiListGroup,
  EuiListGroupItem,
  EuiText,
  EuiTitle,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiSideNav,
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiSpacer,
} from '@elastic/eui';
import Header from './Header';
import PageSection from './PageSection';

import williamsSvg from './williams.svg';
import juniSvg from './juni1.png';
import williams from './Williams1.png';
import kaizen from './kaizen_linkedin.jpg';
import columbia from './columbia.jpg';
import sas from './sas_logo2.jpg';
import linkedin from './linkedin.png';
import wufo from './wufo.jpg';
import piano from './piano.jpg';
import taiwan from './taiwan.png';

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Other themes are also available - see files at
// node_modules/@elastic/eui/dist/
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';

const App = () => {
  const sections = ['About Me', 'Experience', 'Projects', 'Education', 'Extracurriculars', 'Contact Me'];

  const toHref = (title) => {
    return '#' + title.toLowerCase().split(' ').join('-');
  };

  const navItems = sections.map((section) => ({
    name: section,
    id: section,
    href: toHref(section),
  }));

  const renderTitle = () => {
    return (
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size='l'>
            <h1>
              Kaizen Conroy &emsp;
              <EuiIcon type={williamsSvg} size='xxl' /> &emsp;
              <EuiIcon type='logoAWS' size='xxl' /> &emsp;
              <EuiIcon type={juniSvg} size='xxl' /> &emsp;
            </h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
    );
  };

  return (
    <div className='App'>
    <EuiHeader>
        <EuiHeaderSectionItem border="right">
          <EuiHeaderLogo
            iconType='logoGmail'
            href="#"
          />
        </EuiHeaderSectionItem>

        <EuiHeaderLinks>
          <EuiHeaderLink href="#">
          Resume
          </EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeader>
      <Header sections={sections} className='sticky' 
      />
      <EuiPage restrictWidth={true}>
        <EuiPageSideBar>
        <EuiImage
          size="l"
          alt={'Kaizen Conroy'}
          url={kaizen}
          />
          <EuiSpacer />
          <EuiSideNav items={navItems} />
        </EuiPageSideBar>

        <EuiPageBody component='div'>
          {renderTitle()}

          <PageSection title='About Me'>
            <EuiText>
              <p>
                I am a junior at <b> Williams College</b> {' '}
                <EuiIcon
                  type={williamsSvg}
                  size='l'
                  style={{ display: 'inline', margin: 0, width: 'auto' }}
                />
                 {' '} pursuing a bachelor of arts in Computer Science.
              </p>

              <p>
                I will be interning at <b> Amazon Web Services </b> <EuiIcon type='logoAWS' size='l' /> this summer as part of the{' '}
                <b>Cloud Development Kit</b> team. I am beyond excited for this opportunity and am
                looking to get my hands dirty in the form of a Fall Software Engineering Internship
                as well.
              </p>
              <p>
                I teach computer science online as a {' '}
                <b>Senior Instructor</b> at <b>Juni Learning</b>{' '}
                <EuiIcon
                  type={juniSvg}
                  size='l'
                  style={{ display: 'inline', margin: 0, width: 'auto' }}
                />
                {' '}. I help my kids develop skills in <b>Python</b> and <b>Java</b>
                , and I develop our top students for the USA Computing Olympiad. Outside of
                teaching, I moonlight as a Python curriculum developer and recruitment coordinator
                for Juni Learning. Some of the projects I have created and taught are a{' '}
                <b>Tic-Tac-Toe AI</b> that never loses, as well as a simulation of
                <b> Conways Game of Life</b>.
              </p>
              <p>Lets connect! Feel free to contact me at zen.conroy@gmail.com.</p>
            </EuiText>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Experience'>
          <EuiFlexGroup gutterSize='l'>
            <EuiCard
            layout="horizontal"
            icon={<EuiIcon type='logoAWS' size='xxl' />}
            title="Software Development Engineer Intern"
            description="Amazon Web Services, June 2020 - August 2020">
            <EuiText size="s">
              <ul>
                <li>Signed on to the Cloud Development Kit team as a part of AWS Developer Tools.</li>
                <li>Will help evolve open-source developer toolkit for a variety of languages and IDEs.</li>
              </ul>
            </EuiText>
            </EuiCard>
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiSpacer />
          <EuiFlexGroup gutterSize='l'>
            <EuiCard
            layout="horizontal"
            icon={<EuiIcon type={juniSvg} size='xxl' />}
            title="Senior Computer Science Instructor II"
            description="Juni Learning, January 2019 - Present">
            <EuiText size="s">
              <ul>
                <li>Cultivating student understanding in Python Data Structures and Algorithms and AP CS.</li>
                <li>Training top students for USA Computing Olympiad in both Python and Java.</li>
                <li>Developing curriculum for Python Level 3 Data Structures master project on Tic-Tac-Toe AI</li>
                <li>Conducting diagnostic trial lessons and screening instructor applicants.</li>
              </ul>
            </EuiText>
            </EuiCard>
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiSpacer />
          <EuiFlexGroup gutterSize='l'>
            <EuiCard
            layout="horizontal"
            icon={<EuiIcon type={williamsSvg} size='xxl' />}
            title="Computer Science Teaching Assistant"
            description="Williams College CS Department, January 2019 - May 2019">
            <EuiText size="s">
              <ul>
                <li>Led twice-weekly T.A. sessions for Data Structures and Advanced Programming class.</li>
                <li>Effectively explained advanced topics like searching/sorting algorithms, hash tables, graphs.</li>
              </ul>
            </EuiText>
            </EuiCard>
          </EuiFlexGroup>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Projects'>
            <EuiText>
              <p>Here are some of my projects:</p>
            </EuiText>
            <EuiFlexGroup gutterSize='l'>
              <EuiFlexItem>
                <EuiCard
                  image = {williamsSvg}
                  title='Ticket To Ride Board Builder'
                  description='iOS, Swift, XCode'
                  footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  image = {williamsSvg}
                  title='Microservice Application'
                  description='Python, Flask, MySQL, AWS'
                  footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup gutterSize='l'>
            <EuiFlexItem>
              <EuiCard
                image = {williamsSvg}
                title='Heads-Up Poker AI'
                description='Python'
                footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                image = {williamsSvg}
                title='Juni Learning Curriculum'
                description='Python'
                footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
              />
            </EuiFlexItem>
            </EuiFlexGroup>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Education'>
          <EuiFlexGroup gutterSize='l'>
            <EuiCard
            layout="horizontal"
            icon={<EuiIcon type={williamsSvg} size='xxl' />}
            title="Williams College"
            description="B.A., Computer Science, September 2017 - May 2021">
            <EuiText size="s">
              <ul>
                <li>Deans List, GPA: 3.52.</li>
                <li>Computer Science: Software Methods, Algorithm Design, Applied Algos, Data Structures. </li>
                <li>Math: Linear Algebra, Discrete Math, Econometrics.</li>
              </ul>
            </EuiText>
            </EuiCard>
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiSpacer />
          <EuiFlexGroup gutterSize='l'>
            <EuiCard
            layout="horizontal"
            icon={<EuiIcon type={columbia} size='xxl' />}
            title="Columbia University"
            description="Visiting Student in Computer Science, September 2019 - December 2019">
            <EuiText size="s">
              <ul>
                <li>GPA: 3.64. </li>
                <li>Courses: Microservices, AI, Advanced Programming, Databases, Game Theory.</li>
              </ul>
            </EuiText>
            </EuiCard>
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiSpacer />
          <EuiFlexGroup gutterSize='l'>
            <EuiCard
            layout="horizontal"
            icon={<EuiIcon type={sas} size='xxl' />}
            title="Shanghai American School"
            description="High School Diploma, September 2013 - May 2017">
            <EuiText size="s">
              <ul>
                <li>Graduated <i> summa cum laude </i> with 3.92 unweighted GPA.</li>
                <li>2-year Captain and MVP of Varsity Baseball Team.</li>
              </ul>
            </EuiText>
            </EuiCard>
          </EuiFlexGroup>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Extracurriculars'>
          <EuiText>
            <p>At Williams:</p>
          </EuiText>
          <EuiFlexGroup gutterSize='l'>
            <EuiFlexItem>
              <EuiCard
                icon={<EuiIcon size='xxl' type={williamsSvg} />}
                title='Williams Students Online (WSO)'
                description='Member of the Frontend Team developing skills in React and Javascript while working on school website. '
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                icon={<EuiIcon size='xxl' type={wufo} />}
                title='Williams Ultimate Frisbee Organization (WUFO)'
                description='Captain (2020), Logistics Manager (2019), 2nd team All-region (2019).'
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer />
          <EuiText>
            <p>Before Williams:</p>
          </EuiText>
          <EuiFlexGroup gutterSize='l'>
            <EuiFlexItem>
              <EuiCard
                icon={<EuiIcon size='xxl' type={piano} />}
                title='Classical Pianist'
                description='Performed competitively from 2004-2017 in Virginia and Shanghai.'
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                icon={<EuiIcon size='xxl' type={sas} />}
                title='SAS Varsity Baseball'
                description='2-year Captain, 4-year starting shortstop, MVP.'
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                icon={<EuiIcon size='xxl' type={taiwan} />}
                title='Volunteer Teacher'
                description='Taught English to disadvantaged 5th graders in rural Taiwan.'
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Contact Me'>
          <EuiListGroup
              listItems={[
                {
                  label: 'zen.conroy@gmail.com',
                  href: '#',
                  color: "text",
                  iconType: 'logoGmail',
                },
                {
                  label: '@kaizen3031593',
                  href: 'https://github.com/kaizen3031593',
                  color: "text",
                  iconType: 'logoGithub',
                },
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/in/kaizenconroy',
                  color: "text",
                  iconType: 'logoGmail',
                }]
              }
            />
          </PageSection>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
};

export default App;
