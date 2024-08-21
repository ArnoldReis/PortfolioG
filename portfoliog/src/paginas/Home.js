import React from 'react';
import './css/Home.css';
import { GiLightningSpanner, GiGears } from 'react-icons/gi';

export default function Home() {
  return (
    <div className="home-container">
      <h2 className='name-container'>WOLTEG</h2>
      <div className='icon'>
        <GiLightningSpanner className="icon-item" />
        <GiGears className="icon-item" />
      </div>
    </div>
  );
}
