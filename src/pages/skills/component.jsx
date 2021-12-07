import React from 'react';
import PropTypes from 'prop-types';

import { Container, Col } from 'react-bootstrap';

import { Layout, Navbar } from '../../components';

import './index.scss';

const Component = ({ header, title, subtitle, description, children }) => {
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
      {children}
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
