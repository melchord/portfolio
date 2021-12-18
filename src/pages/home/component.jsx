import React from 'react';
import PropTypes from 'prop-types';

import { Container, Col } from 'react-bootstrap';

import { Layout, Navbar } from '../../components';

import './index.scss';

const Component = ({ header, title, subtitle, description }) => {
  return (
    <Layout header={header}>
      <div className='home-page'>
        <Navbar />
        <Container>
          <Col xs={12} className='text-col'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2>{description}</h2>
          </Col>
          <Col xs={12}>
            <div className='image'>
              <img src='/selecting.svg' alt='home-image' />
            </div>
          </Col>
        </Container>
      </div>
    </Layout>
  );
};

Component.displayName = 'Home';

Component.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

Component.defaultProps = {
  header: 'Home-Page',
  title: 'I am Melchor Dominguez',
  subtitle: 'I create websites and software.',
  description: 'I make websites.',
};

export default Component;
