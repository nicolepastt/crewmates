import React from 'react';
import crewImg from '../components/more.png'; // or whatever image

const Home = () => {
  return (
    <div style={{ marginLeft: '200px', textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to the Crewmate Creator!</h1>
      <p>Here is where you can create your very own set of crewmates before sending them off into space!</p>
      <img src={crewImg} alt="crewmates" style={{ width: '250px', marginTop: '2rem' }} />
    </div>
  );
};

export default Home;