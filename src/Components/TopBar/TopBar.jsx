import React, { useState } from 'react';
import './TopBar.css';
import sa from '../../Images/sa.png';
import us from '../../Images/us.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterModal from '../Register/RegisterModal/RegisterModal';
// import RegisterModal from '../RegisterModal/RegisterModal'; // Import the RegisterModal component

export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to manage the modal visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  const handleOpenModal = () => {
    setIsOpen(false);
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  return (
    <div className="Topbar d-flex justify-content-between align-items-center px-2">
      {/* Hamburger button for mobile view */}
      <button className="menu-button d-md-none" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'} {/* Hamburger icon */}
      </button>

      {/* Topbar icons */}
      <div className={`topbar-icons ${isOpen ? 'open' : ''}`}>
        <i className="fa-regular fa-heart my-3" onClick={handleLinkClick}> المفضلة</i>
        <span className="roadblock">|</span>
        <i className="fas fa-shopping-cart my-3" onClick={handleLinkClick}> سلة المشتريات</i>
        <span className="roadblock">|</span>
        <i className="fa-regular fa-user my-3" onClick={handleOpenModal}> تسجيل الدخول</i> {/* Trigger modal on click */}
      </div>

      {/* Search Bar */}
      <div className="search-bar d-flex align-items-center">
        <input type="text" className="form-control" placeholder="ابحث عن منتجاتك..." />
        <button className="btn btn-outline-light">ابحث</button>
      </div>

      {/* Language Section - Always visible */}
      <div className="lang d-flex align-items-center">
        <img src={us} className="px-1 w-75" alt="لوجو الإنجليزية" />
        <img className="px-1 w-75" src={sa} alt="لوجو السعودية" />
      </div>

      {/* Register Modal */}
      <RegisterModal show={showModal} handleClose={handleCloseModal} /> {/* Modal component */}
    </div>
  );
}
