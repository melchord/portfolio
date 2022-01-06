import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col } from 'react-bootstrap';

import { Navbar, Layout } from '../../components';

import './index.scss';

const Component = ({ header, title, subtitle, description }) => {
  return (
    <Layout header={header}>
      <div className='portfolio-page'>
        <Navbar />
        <Container>
          <Col xs={12} className='text-col'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2>{description}</h2>
          </Col>
        </Container>
      </div>
    </Layout>
  );
};

Component.displayName = 'Portfolio';

Component.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

Component.defaultProps = {
  header: 'Portfolio-Page',
  title: 'Portfolio',
  subtitle: 'Nothing to see here.',
  description: 'I have worked with a lot of software.',
};

export default Component;
