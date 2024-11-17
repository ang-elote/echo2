// pages/Access.js
import React from 'react';

function Access() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Welcome to Echo</h1>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#F5F5F5',
  },
  text: {
    color: '#1976D2',
    fontSize: '36px',
  },
};

export default Access;
