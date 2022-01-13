import React from 'react';
import { Container, Col } from 'react-bootstrap';

import NotFoundImage from '../../assets/page_not_found.svg';
import { Layout, Navbar } from '../../components';

import './index.scss';

const Component = () => {
  return (
    <Layout title='404: Error'>
      <div className='not-found'>
        <Navbar />
        <Container>
          <Col xs={12} className='text-col'>
            <h1>Something Went Wrong!</h1>
            <h2>The page you are searching for doesn{`'`}t exist or another error has occured.</h2>
            <h2>This website is actively in development, so pages may simply be not ready yet.</h2>
          </Col>
          <Col xs={12} className='image-col'>
            <div className='image'>
              <img className='page_not_found' src={NotFoundImage} alt='404-image' />
            </div>
          </Col>
        </Container>
      </div>
    </Layout>
  );
};

Component.displayName = 'NotFound';

export default Component;
