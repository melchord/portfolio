import React from 'react';
import { Alert } from 'react-bootstrap';

import { Layout } from '../../components';

const Component = () => {
  return (
    <Layout title='404: Error'>
      <div className='404'>
        <h1> Something Went Wrong</h1>
        <Alert>TODO: Finish 404 Screen</Alert>
      </div>
    </Layout>
  );
};

Component.displayName = 'NotFound';

export default Component;
