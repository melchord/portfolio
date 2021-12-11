import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col } from 'react-bootstrap';
import { FaCodeBranch, FaDatabase } from 'react-icons/fa';
import { GiCobWeb } from 'react-icons/gi';

import { Layout, Navbar, SkillsCard } from '../../components';

import './index.scss';

const Component = ({ header, title, subtitle, description }) => {
  const programmingLanguagesCard = (
    <SkillsCard
      logo={FaCodeBranch}
      title='Programming Languages'
      text='Javascript, Java, Dart, C, C++, Python, R, MATLAB'
    />
  );
  const webDevelopmentCard = (
    <SkillsCard
      logo={GiCobWeb}
      title='Web Development'
      text='React, Nginx, Certbot, AWS, HTML, SCSS, JSON, XML'
    />
  );
  const databasesCard = (
    <SkillsCard logo={FaDatabase} title='Databases' text='SQL, GraphQL, NoSQL, Google Firestore' />
  );
  const toolsCard = (
    <SkillsCard
      logo={FaDatabase}
      title='Tools'
      text='Redux, Flutter, Docker, REST, Git, Bitbucket, SaaS architecture, Google Analytics, Google Firebase, LaTeX, Node.js, Mocha, Visual Studio Code, Android Studio'
    />
  );
  return (
    <Layout header={header}>
      <div className='skills-page'>
        <Navbar />
        <Container>
          <Col xs={12} lg={6} className='text-col'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2>{description}</h2>
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
