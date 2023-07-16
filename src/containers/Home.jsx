import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

function Home() {
  return (
    <div className='Home'>
      <h1>Hello from Home</h1>
      <Link to={'/'}>Atras</Link>
    </div>
  );
}

export default Home;
