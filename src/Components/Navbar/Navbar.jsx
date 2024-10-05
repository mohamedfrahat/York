import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Images/0001078_YORK Logo.png';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='nav-bar p-1'>
  

      {/* Button to toggle the nav links */}
      <button className="menu-button mx-2 d-md-none" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'} {/* Hamburger icon */}
      </button>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/s"><span>قطع غيار</span></NavLink>
        <NavLink to="/s"><span>ستاره هوائيه</span></NavLink>
        <NavLink to="/s"><span>سبليت مخفي</span></NavLink>
        <NavLink to="/s"><span>كاسيت</span></NavLink>
        <NavLink to="/Window"><span>مدمج</span></NavLink>
        <NavLink to="/Split"><span>دولابي</span></NavLink>
        <NavLink to="/"><span>الرئيسية</span></NavLink>
      </div>
      <div className="logo-container">
       <Link to="/"> <img className='w-100' src={logo} alt='logo' /></Link>
      </div>
    </div>
  );
}
