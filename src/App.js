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
  EuiSpacer,
} from '@elastic/eui';
import Header from './Header';
import PageSection from './PageSection';

import williamsSvg from './williams.svg';
import juniSvg from './juni1.png';

// Other themes are also available - see files at
// node_modules/@elastic/eui/dist/
import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';

const App = () => {
  const sections = ['About Me', 'Experience', 'Projects', 'Extracurriculars', 'Contact Me'];

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
      <Header sections={sections} className='sticky' />
      <EuiPage restrictWidth={true}>
        <EuiPageSideBar>
          <EuiSideNav items={navItems} />
        </EuiPageSideBar>

        <EuiPageBody component='div'>
          {renderTitle()}

          <PageSection title='About Me'>
            <EuiText>
              <p>
                {/* jsx comments should be written like this instead */}
                // why is this not a comment lol
                <EuiImage size='l' alt='some text' url={'Williams1.png'} />I am a junior at{' '}
                <EuiIcon
                  type={williamsSvg}
                  size='l'
                  style={{ display: 'inline', margin: 0, width: 'auto' }}
                />
                <b>Williams College</b> pursuing a bachelor of arts in Computer Science.
              </p>
              <p>
                <center>
                  <EuiIcon type='logoAWS' size='l' />
                </center>
              </p>
              <p>
                I will be interning at <b>Amazon Web Services</b> this summer as part of the{' '}
                <b>Cloud Development Kit</b> team. I am beyond excited for this opportunity and am
                looking to get my hands dirty in the form of a Fall Software Engineering Internship
                as well.
              </p>
              <p>
                <center>
                  <EuiIcon type={juniSvg} size='original' />
                  //
                  <EuiImage size='l' alt='some text' url={juniSvg} />
                </center>
              </p>
              <p>
                During the school year, I teach computer science online as a{' '}
                <b>Senior Instructor</b> at
                <b>Juni Learning</b>. I help my kids develop skills in <b>Python</b> and <b>Java</b>
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

          <PageSection title='Experience'></PageSection>
          <EuiSpacer />

          <PageSection title='Projects'>
            <EuiText>
              <p>Here are some of my projects:</p>
            </EuiText>
            <EuiFlexGroup gutterSize='l'>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size='xxl' type='devToolsApp' />}
                  title='Built Something'
                  description='With like, a spanner and a screwdriver.'
                  footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size='xxl' type='devToolsApp' />}
                  title='Built Something Else'
                  description='With two hammers and a torch.'
                  footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size='xxl' type='devToolsApp' />}
                  title='Built Another thing'
                  description='How many things can I build?'
                  footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size='xxl' type='devToolsApp' />}
                  title='Built The THING'
                  description='With a lot of gusto.'
                  footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Extracurriculars'></PageSection>
          <EuiSpacer />

          <PageSection title='Contact Me'>
            <EuiListGroup>
              <EuiListGroupItem label='@kaizen3031593' iconType='logoGithub' />
              <EuiListGroupItem label='zen.conroy@gmail.com' iconType='logoGmail' />
            </EuiListGroup>
          </PageSection>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
};

export default App;
