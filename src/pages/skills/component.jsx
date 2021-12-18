import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col } from 'react-bootstrap';
import { FaCodeBranch, FaDatabase, FaTools } from 'react-icons/fa';
import { GiCobweb } from 'react-icons/gi';

import { Layout, Navbar, SkillsCard } from '../../components';

import './index.scss';

const Component = ({ header, title, subtitle, description }) => {
  const programmingLanguagesCard = (
    <SkillsCard
      logo={<FaCodeBranch size={24} />}
      title='Programming Languages'
      text='Javascript, Java, Dart, C, C++, Python, R, MATLAB'
    />
  );
  const webDevelopmentCard = (
    <SkillsCard
      logo={<GiCobweb size={24} />}
      title='Web Development'
      text='React, Nginx, Certbot, AWS, HTML, SCSS, JSON, XML'
    />
  );
  const databasesCard = (
    <SkillsCard
      logo={<FaDatabase size={24} />}
      title='Databases'
      text='SQL, GraphQL, NoSQL, Google Firestore'
    />
  );
  const toolsCard = (
    <SkillsCard
      logo={<FaTools size={24} />}
      title='Tools'
      text='Redux, Flutter, Docker, REST, Git, Bitbucket, SaaS architecture, Google Analytics, Google Firebase, LaTeX, Node.js, Mocha, Visual Studio Code, Android Studio'
    />
  );
  return (
    <Layout header={header}>
      <div className='skills-page'>
        <Navbar />
        <Container>
          <Col xs={12} className='text-col'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2>{description}</h2>
            <Container className='cards'>
              {programmingLanguagesCard}
              {webDevelopmentCard}
              {databasesCard}
              {toolsCard}
            </Container>
          </Col>
        </Container>
      </div>
    </Layout>
  );
};

Component.displayName = 'Skills';

Component.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

Component.defaultProps = {
  header: 'Skills-Page',
  title: 'Skills',
  subtitle: 'I create websites and software.',
  description: 'I make websites.',
};

export default Component;
