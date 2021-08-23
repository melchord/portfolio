import React from 'react';

const Home = () => {
  // const [value, setValue] = React.useState('');

  /*
  const addValue = () => {
    db.collection('values')
      .doc('LA')
      .set({
        value: value,
      })
      .then(function () {
        console.log('Value successfully written!');
      })
      .catch(function (error) {
        console.log('Error writing value: ', error);
      });
  }; */

  return (
    <div className='home'>
      <h1> Example Title</h1>
      {/*
      <input onBlur={getValue} type='text' />
      <button type='button' onClick={addValue}>
        Add
      </button>{' '}
			*/}
    </div>
  );
};

export default Home;
