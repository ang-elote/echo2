// pages/Home.js
import React from 'react';
import CustomButton from '../components/Button'; // Adjust the import path if necessary

function Home() {
  const handleClick = () => {
    console.log('Home Button Clicked!');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <CustomButton text="Click Me" onClick={handleClick} />
    </div>
  );
}

export default Home;
