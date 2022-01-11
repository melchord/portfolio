import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col } from 'react-bootstrap';

import { Navbar, Layout } from '../../components';

import './index.scss';

const Component = ({ header, title, subtitle, description, links }) => {
  var linksMap = {};
  if (links) {
    linksMap = JSON.parse(links);
  }
  console.log(linksMap);
  return (
    <Layout header={header}>
      <div className='contact-page'>
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

Component.displayName = 'Contact';

Component.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.string,
};

Component.defaultProps = {
  header: 'Contact-Page',
  title: 'Contact',
  subtitle: 'Nothing to see here.',
  description: 'Coming Soon...',
  links: '',
};

export default Component;
