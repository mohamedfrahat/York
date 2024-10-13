import React from 'react';
import './Loading.css'; 
import logo from '../../Images/0001078_YORK Logo.png';

export default function Loading({ large = false, small = false }) {
  return (
    <>
      {large && (
        <div className="loading-full-screen">
          <img src={logo} alt="Loading Logo" className="loading-logo" />
          <div className="loading-spinner"></div> 
        </div>
      )}
      {small && (
        <div className="loading-small">
          <img src={logo} alt="Loading Logo" className="loading-logo-small" />
          <div className="loading-spinner-small"></div> 
        </div>
      )}
    </>
  );
}
