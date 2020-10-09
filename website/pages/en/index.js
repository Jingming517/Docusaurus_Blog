/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="#try">Projects</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>About</h2>
        <MarkdownBlock>I'm a Year 2 Computer Engineering student in the National University of Singapore. </MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              '• Level of achievement: Artemis <br>' +
              '• Collaborated in team of 2 to develop a web-based 3D scene rendering engine <br>' +
              '• UI and UX development (Landing Page & Login Page) <br>' +
              '• Gained programming experience and upgraded technical skills <br>' +
              '• Self-learning skills <br>' +
              '• Programming: HTML5, JavaScript and CSS',
            image: `${baseUrl}img/project_leapengine_cut.jpg`,
            imageAlign: 'right',
            title: 'Project: Leap Engine',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              '• FPGA development using Fast Fourier Transformation to detect voice frequency <br> • Audio and volume detection and graphic output <br> • Maze Game development of display and user input <br>• Programming: Verilog',
            image: `${baseUrl}img/project_ee.jpg`,
            imageAlign: 'left',
            title: 'Project: Verilog Program written for FPGA board',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              ' ',
            image: `${baseUrl}img/profile.jpg`,
            imageAlign: 'right',
            title: 'About Me',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'The National University of Singapore (NUS) is the national research university of Singapore. Founded in 1905 as the Straits Settlements and Federated Malay States Government Medical School, NUS is the oldest higher education institution in Singapore. It is consistently ranked within the top 20 universities in the world and is considered to be the best university in the Asia-Pacific. NUS is a comprehensive research university, offering a wide range of disciplines, including the sciences, medicine and dentistry, design and environment, law, arts and social sciences, engineering, business, computing and music at both the undergraduate and postgraduate levels.',
            image: `${baseUrl}img/nus_logo.svg`,
            imageAlign: 'top',
            title: 'National University of Singapore',
          },
          {
            content: 'Temasek Junior College (TJC) (Chinese: 淡马锡初级学院; pinyin: Dànmǎxī chūjí xuéyuàn) is a Junior College located on the eastern side of Singapore that also offers a 6 years Integrated Programme along with the traditional 2 year GCE Advanced Level curriculum.',
            image: `${baseUrl}img/tjc_logo.png`,
            imageAlign: 'top',
            title: 'Temasek Junior College',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
