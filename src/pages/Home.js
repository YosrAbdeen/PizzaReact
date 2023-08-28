import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/pizzaBackground.JPEG'; 
import "../styles/Home.css";

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url('${image}')` }}>
    <div className='headerContainer' >
      <h1>Nona's Pizza</h1>
      <p>Napoletana Pizza fit any taste</p>
      <Link to="/menu">
       <button> ORDER NOW</button>
       </Link>
    </div>
    </div>
  )
}

export default Home
