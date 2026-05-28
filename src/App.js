import React, { useState } from 'react';
import {
  EuiAccordion,
  EuiBadge,
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiImage,
  EuiListGroup,
  EuiText,
  EuiTitle,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiSideNav,
  EuiSpacer,
  EuiPopover,
  EuiPopoverTitle,
  EuiButtonEmpty,
} from '@elastic/eui';
import Header from './Header';
import PageSection from './PageSection';

import williamsSvg from './images/williams.svg';
import juniSvg from './images/juni1.png';
import poker from './images/poker.png';
import kaizen from './images/kaizen_conroy.jpg';
import columbia from './images/columbia.jpg';
import sas from './images/sas_logo2.jpg';
import wufo from './images/wufo.jpg';
import piano from './images/piano.jpg';
import taiwan from './images/taiwan.png';
import ios from './images/map.png';
import micro from './images/microservice.png';
import cryptonight from './images/gemlogo.png';
import cryptoscreen from './images/cryptoscreen1.png';

import '@elastic/eui/dist/eui_theme_light.css';
import './App.css';

import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub } from '@fortawesome/free-brands-svg-icons'

const App = () => {
  const sections = ['About Me', 'Experience', 'Languages & Tools', 'Projects', 'Education', 'Coursework', 'Extracurriculars', 'Contact Me'];

  const toHref = (title) => {
    return '#' + title.toLowerCase().split(' ').join('-');
  };

  const makeIcon = (inputIcon) => {
    return (
      <svg
        className='euiIcon euiIcon--medium euiIcon-isLoaded euiListGroupItem__icon'
        viewBox='0 0 512 512'>
        <path d={inputIcon.icon[4]} />
      </svg>
    );
  };

  const [isPopoverOpen2, setIsPopoverOpen2] = useState(false);
  const onButtonClick2 = () => setIsPopoverOpen2(isPopoverOpen2 => !isPopoverOpen2);
  const closePopover2 = () => setIsPopoverOpen2(false);

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
              <EuiIcon type='logoAWS' size='xxl' /> &emsp;
              <EuiIcon type={cryptonight} size='xxl' /> &emsp;
              <EuiIcon type={williamsSvg} size='xxl' /> &emsp;
              <EuiIcon type={columbia} size='xxl' /> &emsp;
              <EuiIcon type={juniSvg} size='xxl' /> &emsp;
            </h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
    );
  };

  return (
    <div className='App'>
      <Header sections={sections} className='sticky'
      />
      <EuiPage restrictWidth={true}>
        <EuiPageSideBar>
        <EuiImage
          size="l"
          alt={'Kaizen Conroy'}
          url={kaizen}
          style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
          <EuiSpacer />
          <EuiSideNav items={navItems} />
        </EuiPageSideBar>

        <EuiPageBody component='div'>
          {renderTitle()}

          <PageSection title='About Me'>
            <EuiText>
              <p>
                I'm a Software Development Engineer at <b> Amazon Web Services </b> <EuiIcon type='logoAWS' size='l' /> on the {' '}
                <b>Cloud Development Kit</b> team — AWS's open-source infrastructure-as-code platform with 4M+ weekly downloads.
                I joined AWS full-time in August 2021 after graduating from <b> Williams College</b> {' '}
                <EuiIcon
                  type={williamsSvg}
                  size='l'
                  style={{ display: 'inline', margin: 0, width: 'auto' }}
                />
                {' '} with a degree in Computer Science, and was promoted to SDE II in 2022.
              </p>

              <p>
                On CDK, I've designed and shipped foundational systems used across the Dev Tools org: a telemetry service for the CDK CLI
                serving 100k+ invocations/hour, the validation framework that powers <a href="https://github.com/cdklabs/cdk-nag">cdk-nag</a> and
                10+ other third-party plugins, and a re-architecture of the <a href="https://constructs.dev/">Construct Hub</a> npm ingestion
                workflow on Lambda + StepFunctions. I also own <a href="https://github.com/cdklabs/cdk-pipelines-github">cdk-pipelines-github</a> end-to-end —
                a CI/CD platform for deploying CDK apps via GitHub Workflows with 20k+ weekly downloads.
              </p>
              <p>
                More recently, I've been building <b>reveries</b>, a continuous-learning AI subsystem for <b>Kiro AI</b> that observes developer
                sessions, detects personal patterns, and builds a per-user library of "instincts" that make Kiro better over time.
                I also designed <a href="https://github.com/cdklabs/cdk-merit-badgers">CDK Merit Badgers</a>, an incentive system that
                assigns a badge to every open-source contribution we receive and guides beginning contributors toward mentorship.
              </p>
              <p>
                Before AWS, I spent an inspirational "study abroad" semester at <b>Columbia University </b>
                <EuiIcon
                  type={columbia}
                  size='l'
                  style={{ display: 'inline', margin: 0, width: 'auto' }}
                />
                {' '} taking four tough CS classes that solidified my love for the discipline, and taught CS online as a {' '}
                <b>Senior Instructor</b> at <b>Juni Learning</b>{' '}
                <EuiIcon
                  type={juniSvg}
                  size='l'
                  style={{ display: 'inline', margin: 0, width: 'auto' }}
                />
                {' '} from 2019 through 2021 — helping kids build fundamentals and train for the USA Computing Olympiad.
              </p>
              <p>
                On the side, I built and maintain the online multiplayer game <a href="https://cryptonight.codes/"><b>CryptoNight</b> </a>
                <EuiIcon
                  type={cryptonight}
                  size='l'
                  style={{ display: 'inline', margin: 0, width: 'auto' }}
                />
                , a superhero-themed take on Codenames. It runs on an AWS EC2 instance with an Elastic IP and Route 53 Hosted Zone —
                I get to be both a customer and a developer for AWS.
              </p>
              <p>Let's connect! Feel free to reach out at zen.conroy@gmail.com.</p>
            </EuiText>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Experience'>

          <EuiFlexGroup gutterSize='l'>
            <EuiCard
            layout="horizontal"
            icon={<EuiIcon type='logoAWS' size='xxl' />}
            title="Software Development Engineer I & II"
            description="Amazon Web Services, August 2021 - Present">
            <EuiFlexGroup wrap responsive={false} gutterSize="xs">
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">TypeScript</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">Rust</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">Python</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">AWS</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">Kiro AI</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">Claude</EuiBadge>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="m" />
            <EuiText size="s">
              <ul>
                <li>Promoted to SDE II in 2022 on the <a href="https://github.com/aws/aws-cdk">Cloud Development Kit</a> team — AWS's infrastructure-as-code platform with 4M+ weekly downloads.</li>
                <li>Designed and built a telemetry service for CDK CLI serving 100k+ invocations/hour; provides real-time usage metrics and alerts the team to regressions within 15 minutes. Now a foundational shared service consumed across the Dev Tools org.</li>
                <li>Architected CDK's validation framework integrating default, 3rd-party, and bespoke annotations into a single layer with suppression and auditing support for enterprises. 10+ external plugins built on the framework including <a href="https://github.com/cdklabs/cdk-nag">cdk-nag</a> (250k weekly downloads).</li>
                <li>Re-architected the failing npm ingestion workflow in <a href="https://constructs.dev/">Construct Hub</a> (catalogs 3k+ CDK constructs) to a robust AWS Lambda / StepFunctions architecture that protects against eventual-consistency bugs that caused frequent missed package updates.</li>
                <li>Developed <b>reveries</b>, a continuous-learning AI subsystem for Kiro AI that observes developer sessions, detects personal patterns, and builds a per-user library of "instincts" that make Kiro AI better over time.</li>
                <li>Own <a href="https://github.com/cdklabs/cdk-pipelines-github">cdk-pipelines-github</a> end-to-end — a CI/CD platform for deploying CDK apps via GitHub Workflows. 27 unique open-source contributors, 381+ GitHub Stars, 20k+ weekly npm downloads.</li>
                <li>Designed a bespoke incentive system called <a href="https://github.com/cdklabs/cdk-merit-badgers">CDK Merit Badgers</a> that assigns a badge to every open-source contribution received, plus workflows that guide beginning contributors to mentorship from tenured contributors.</li>
              </ul>
            </EuiText>
            </EuiCard>
          </EuiFlexGroup>

          <EuiSpacer />
          <EuiSpacer />
          
          <EuiFlexGroup gutterSize='l'>
            <EuiCard
            layout="horizontal"
            icon={<EuiIcon type='logoAWS' size='xxl' />}
            title="Software Development Engineer Intern"
            description="Amazon Web Services, June 2020 - August 2020">
            <EuiFlexGroup wrap responsive={false} gutterSize="xs">
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">TypeScript</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="warning">Git</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">AWS Certified Cloud Practitioner</EuiBadge>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="m" />
            <EuiText size="s">
              <ul>
                <li>Fully owned all phases of the software development lifecycle for a new CDK Construct modeling AWS CloudWatch Synthetics, launching it in Developer Preview a month ahead of schedule.</li>
                <li>Built a reference app using the CDK framework for AWS Synthetics demonstrating integration with AWS CodePipeline for enhanced CI/CD efforts. Used AWS Lambda, ApiGateway, CodePipeline, CloudWatch, and SNS.</li>
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
            title="Senior Computer Science Instructor"
            description="Juni Learning, January 2019 - August 2021">
            <EuiFlexGroup wrap responsive={false} gutterSize="xs">
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">Python</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">Java</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">C++</EuiBadge>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="m" />
            <EuiText size="s">
              <ul>
                <li>Cultivated student understanding in data structures, AP Computer Science, and USA Computing Olympiad (Bronze &amp; Silver).</li>
                <li>Developed curriculum for a new Python Algorithms course, conducted diagnostic trial lessons, screened instructor applicants.</li>
              </ul>
            </EuiText>
            </EuiCard>
          </EuiFlexGroup>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Languages & Tools'>
            <EuiText>
              <p><b>Languages</b></p>
              <p>Proficient:</p>
            </EuiText>
            <EuiFlexGroup wrap responsive={false} gutterSize="xs">
              <EuiFlexItem grow={false}><EuiBadge color="primary">TypeScript</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="primary">Python</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="primary">Rust</EuiBadge></EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="s" />
            <EuiText>
              <p>Experienced:</p>
            </EuiText>
            <EuiFlexGroup wrap responsive={false} gutterSize="xs">
              <EuiFlexItem grow={false}><EuiBadge color="hollow">Java</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="hollow">JavaScript</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="hollow">C/C++</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="hollow">Swift</EuiBadge></EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
            <EuiText>
              <p><b>Cloud (AWS)</b></p>
            </EuiText>
            <EuiFlexGroup wrap responsive={false} gutterSize="xs">
              <EuiFlexItem grow={false}><EuiBadge color="secondary">Lambda</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="secondary">SQS</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="secondary">SNS</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="secondary">DynamoDB</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="secondary">StepFunctions</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="secondary">Kinesis</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="secondary">Glue</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="secondary">CodePipeline</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="secondary">CDK</EuiBadge></EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
            <EuiText>
              <p><b>Tools</b></p>
            </EuiText>
            <EuiFlexGroup wrap responsive={false} gutterSize="xs">
              <EuiFlexItem grow={false}><EuiBadge color="warning">CDK</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="warning">Terraform</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="warning">Node.js</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="warning">GraphQL</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="warning">REST</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="warning">Git</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="warning">GitHub Workflows</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="warning">Docker</EuiBadge></EuiFlexItem>
              <EuiFlexItem grow={false}><EuiBadge color="warning">Claude</EuiBadge></EuiFlexItem>
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
                image = {cryptoscreen}
                title='CryptoNight Game'
                description={
                  <EuiFlexGroup wrap responsive={false} gutterSize="xs" alignItems="center">
                    <EuiFlexItem grow={false}>
                      <EuiBadge color="primary">JavaScript</EuiBadge>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiBadge color="secondary">Node.js</EuiBadge>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiBadge color="secondary">Express.js</EuiBadge>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiBadge color="secondary">Socket.io</EuiBadge>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiBadge color="secondary">MongoDB</EuiBadge>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiBadge color="secondary">AWS</EuiBadge>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiBadge color="secondary">nginx</EuiBadge>
                    </EuiFlexItem>
                      
                  </EuiFlexGroup>
                }
                footer={<EuiButton href="https://cryptonight.codes/">See it</EuiButton>}
              />
            </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  image = {ios}
                  title='Custom Ticket To Ride Boards!'
                  description = {
                    <EuiFlexGroup wrap responsive={false} gutterSize="xs" alignItems="center">
                      <EuiFlexItem grow={false}>
                        <EuiBadge color="primary">Swift</EuiBadge>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiBadge color="secondary">XCode</EuiBadge>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiBadge color="secondary">iOS</EuiBadge>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  }
                  footer={<EuiButton href="https://github.com/kaizencc/TTR-Board-Builder">See it</EuiButton>}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiFlexGroup gutterSize='l'>
              <EuiFlexItem>
                <EuiCard
                  image = {micro}
                  title='Microservice Application'
                  description={
                    <EuiFlexGroup wrap responsive={false} gutterSize="xs" alignItems="center">
                      <EuiFlexItem grow={false}>
                        <EuiBadge color="primary">Python</EuiBadge>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiBadge color="primary">MySQL</EuiBadge>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiBadge color="secondary">Flask</EuiBadge>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiBadge color="secondary">AWS</EuiBadge>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  }
                  footer={
                    <EuiPopover
                      ownFocus
                      button={
                        <EuiButton
                          iconSide="right"
                          onClick={onButtonClick2}>
                          See it
                        </EuiButton>
                      }
                      isOpen={isPopoverOpen2}
                      closePopover={closePopover2}
                      anchorPosition="upCenter"
                      panelPaddingSize="s">
                      <EuiPopoverTitle>Private Github Repository</EuiPopoverTitle>
                      <div style={{ width: '300px' }}>
                        <EuiText>
                          <p>Please contact me for code</p>
                        </EuiText>
                      </div>
                    </EuiPopover>
                  }
                />
              </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                image = {poker}
                title='Heads-Up Poker AI'
                description={
                  <EuiFlexGroup wrap responsive={false} gutterSize="xs" alignItems="center">
                    <EuiFlexItem grow={false}>
                      <EuiBadge color="primary">Python</EuiBadge>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                }
                footer={<EuiButton href="https://github.com/kaizencc/Poker-Project">See it</EuiButton>}
              />
            </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer />
            <EuiText>
              <p>Check out more (including this project) at my github: 
                <EuiButtonEmpty 
                  iconType="logoGithub"
                  color="text"
                  size = "s"
                  href="https://github.com/kaizencc">
                </EuiButtonEmpty>
              </p>
            </EuiText>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Education'>
          <EuiFlexGroup gutterSize='l'>
            <EuiCard
            layout="horizontal"
            icon={<EuiIcon type={williamsSvg} size='xxl' />}
            title="Williams College"
            description="B.A., Computer Science, September 2017 - May 2021">
            <EuiFlexGroup wrap responsive={false} gutterSize="xs" alignItems="center">
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">Java</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">C</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">Swift</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">Stata</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">Git</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">Latex</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">XCode</EuiBadge>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="m" />
            <EuiText size="s">
              <ul>
                <li>Deans List, GPA: 3.65. Computer Science GPA: 3.77.</li>
                <li>Computer Science: Theory of Computation, Programming Languages, Software Methods, Algorithm Design, Human AI Interaction, Applied Algos, Data Structures. </li>
                <li>Math: Graph Theory, Linear Algebra, Discrete Math, Econometrics, Multivariable Calculus.</li>
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
            <EuiFlexGroup wrap responsive={false} gutterSize="xs" alignItems="center">
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">Python</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="primary">SQL</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">Git</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">Flask</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">scikit-learn</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">Postman</EuiBadge>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiBadge color="secondary">AWS</EuiBadge>
              </EuiFlexItem>
            </EuiFlexGroup>
            <EuiSpacer size="m" />
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
                <li>Averaged 4.82 score on 11 AP tests.</li>
              </ul>
            </EuiText>
            </EuiCard>
          </EuiFlexGroup>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Coursework'>
          <EuiAccordion
            id="accordion"
            buttonContent="Fall 2017"
            paddingSize="l"
            >
            <EuiText textAlign='right'>
              <EuiBadge color="secondary" iconType="user">GPA: 3.50</EuiBadge>
            </EuiText>
            <EuiText>
              <ul>
                <li><b>AMST 101:</b> America: The Nation and its Discontents (A-)</li>
                <li><b>ANTH 101:</b> How to be Human (B+)</li>
                <li><b>CSCI 134:</b> Algorithmic Problem Solving with Robots (A)</li>
                <li><b>ENGL 285:</b> Intro Workshop in Prose (B)</li>
              </ul>
            </EuiText>
          </EuiAccordion>
          <EuiAccordion
            id="accordion"
            buttonContent="Spring 2018"
            paddingSize="l"
            >
            <EuiText textAlign='right'>
              <EuiBadge color="secondary" iconType="user">GPA: 3.50</EuiBadge>
            </EuiText>
            <EuiText>
              <ul>
                <li><b>CSCI 136:</b> Data Structures and Advanced Programming (B+)</li>
                <li><b>ECON 251:</b> Price and Allocation Theory (A-)</li>
                <li><b>ENGL 246:</b> The Love of Literature (B+)</li>
                <li><b>MUS 150:</b> The Broadway Musical (A-)</li>
              </ul>
            </EuiText>
          </EuiAccordion>
          <EuiAccordion
            id="accordion"
            buttonContent="Fall 2018"
            paddingSize="l">
            <EuiText textAlign='right'>
              <EuiBadge color="secondary" iconType="user">GPA: 3.50</EuiBadge>
            </EuiText>
            <EuiText>
              <ul>
                <li><b>CSCI 237:</b> Computer Organization (B+)</li>
                <li><b>ECON 252:</b> Intermediate Macroeconomics (B)</li>
                <li><b>MATH 200:</b> Discrete Math (A)</li>
                <li><b>THEA 103:</b> Acting Fundamentals (A-)</li>
              </ul>
            </EuiText>
          </EuiAccordion>
          <EuiAccordion
            id="accordion"
            buttonContent="Spring 2019"
            paddingSize="l">
            <EuiText textAlign='right'>
              <EuiBadge color="secondary" iconType="user">GPA: 3.58</EuiBadge>
            </EuiText>
            <EuiText>
              <ul>
                <li><b>CSCI 256:</b> Algorithm Design and Analysis (B+)</li>
                <li><b>ECON 255:</b> Econometrics (B+)</li>
                <li><b>ENGL 202:</b> Modern Drama (A-)</li>
                <li><b>MATH 250:</b> Linear Algebra (A)</li>
              </ul>
            </EuiText>
          </EuiAccordion>
          <EuiAccordion
            id="accordion"
            buttonContent="Fall 2019 - Columbia University"
            paddingSize="l">
            <EuiText textAlign='right'>
              <EuiBadge color="secondary" iconType="user">GPA: 3.64</EuiBadge>
            </EuiText>
            <EuiText>
              <ul>
                <li><b>COMS 3157:</b> Advanced Programming (B+)</li>
                <li><b>COMS 4111:</b> Intro to Databases (A)</li>
                <li><b>COMS 4701:</b> Artificial Intelligence (B)</li>
                <li><b>COMS 6156:</b> Topics in Software Engineering (A+)</li>
                <li><b>ECON 4415:</b> Game Theory (A-)</li>
              </ul>
            </EuiText>
          </EuiAccordion>
          <EuiAccordion
            id="accordion"
            buttonContent="Spring 2020"
            paddingSize="l">
            <EuiText textAlign='right'>
              <EuiBadge color="secondary" iconType="user">GPA: n/a</EuiBadge>
            </EuiText>
            <EuiText>
              <ul>
                <li><b>CSCI 326:</b> Software Methods (P)</li>
                <li><b>CSCI 358:</b> Applied Algorithms (P)</li>
                <li><b>PHIL 104:</b> Philsophy and Tragedy (P)</li>
                <li><b>STS 153:</b> Androids, Cyborgs, and Selves (P)</li>
              </ul>
            </EuiText>
          </EuiAccordion>
          <EuiAccordion
            id="accordion"
            buttonContent="Fall 2020"
            paddingSize="l">
            <EuiText textAlign='right'>
              <EuiBadge color="secondary" iconType="user">GPA: 3.89</EuiBadge>
            </EuiText>
            <EuiText>
              <ul>
                <li><b>CSCI 334:</b> Principles of Programming Languages (A-)</li>
                <li><b>CSCI 357:</b> Algorithmic Game Theory (P)</li>
                <li><b>MATH 151:</b> Multivariable Calculus (A)</li>
                <li><b>MUS 101:</b> Listening to Music (A)</li>
              </ul>
            </EuiText>
          </EuiAccordion>
          <EuiAccordion
            id="accordion"
            buttonContent="Spring 2021"
            paddingSize="l">
            <EuiText textAlign='right'>
              <EuiBadge color="secondary" iconType="user">GPA: 4.0</EuiBadge>
            </EuiText>
            <EuiText>
              <ul>
                <li><b>CSCI 361:</b> Theory of Computation (A)</li>
                <li><b>CSCI 378:</b> Human-AI Interaction (A)</li>
                <li><b>MATH 334:</b> Graph Theory (A)</li>
                <li><b>MUS 149:</b> The Language of Film Music (A)</li>
                <li><b>MUS 232:</b> Music in History: Classical and Romantic Music (P)</li>
              </ul>
            </EuiText>
          </EuiAccordion>
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
                description={
                  <EuiFlexItem>
                    <EuiFlexGroup wrap responsive={false} gutterSize="xs" alignItems="center">
                      <EuiFlexItem grow={false}>
                        <EuiBadge color="primary">JavaScript</EuiBadge>
                      </EuiFlexItem>
                      <EuiFlexItem grow={false}>
                        <EuiBadge color="secondary">React</EuiBadge>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                    <EuiSpacer size="m" />
                    <EuiText size="s">
                      <p>Mentor students and develop features for the Frontend Team of school website.</p>
                    </EuiText>
                  </EuiFlexItem>
                }
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiCard
                icon={<EuiIcon size='xxl' type={wufo} />}
                title='Williams Ultimate Frisbee Organization (WUFO)'
                description='Captain (2020-21), 2021 Donovan Award finalist (top DIII player in the country), Logistics Manager (2019), 2nd team All-region (2019).'
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
                  iconType: () => makeIcon(faEnvelope),
                },
                {
                  label: '@kaizencc',
                  href: 'https://github.com/kaizencc',
                  color: "text",
                  iconType: () => makeIcon(faGithub),
                },
                {
                  label: '@kaizenconroy',
                  href: 'https://linkedin.com/in/kaizenconroy',
                  color: "text",
                  iconType: () => makeIcon(faLinkedinIn),
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
