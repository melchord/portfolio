import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Firebase, Layout, Navbar } from '../../components';

const Home = () => {
  const db = Firebase.firestore();
  let header = 'Loading...';
  db.collection('Pages')
    .doc('Home')
    .get()
    .then((snapshot) => {
      header = snapshot.data().header;
      console.log(`HOME --- header: ${header}`);
    });
  return (
    <Layout>
      <div className='home'>
        <Navbar />
        <h1>{header}</h1>
        <h2>Software Engineer locaed in Charlotte.</h2>
        <h2>
          Experienced in <span>Javascript</span>
        </h2>
      </div>
    </Layout>
  );
};

export default Home;
