import React from 'react'
import mainPageImage from '../assets/main.jpeg'
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${mainPageImage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  );
}
