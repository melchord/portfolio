import React from 'react';
import PropTypes from 'prop-types';

import { Container, Col } from 'react-bootstrap';

import { Layout, Navbar } from '../../components';

import './index.scss';

const Component = ({ header, title, subtitle }) => {
  /* const db = Firebase.firestore();
  let header = 'Loading...';
  db.collection('Pages')
    .doc('Home')
    .get()
    .then((snapshot) => {
      header = snapshot.data().header;
      console.log(`HOME --- header: ${header}`);
    });
	*/
  return (
    <Layout header={header}>
      <div className='home-page'>
        <Navbar />
        <Container>
          <Col xs={12} lg={6} className='text-col'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </Col>
          <Col xs={12} lg={6}>
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
};

Component.defaultProps = {
  header: 'Home-Page',
  title: 'I am Melchor Dominguez',
  subtitle: 'I create websites and software.',
};

export default Component;
