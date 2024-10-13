import React, { useState } from 'react';
import './TopBar.css';
import sa from '../../Images/sa.png';
import us from '../../Images/us.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterModal from '../Register/RegisterModal/RegisterModal';
import { Link } from 'react-router-dom';


export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
    <div className="Topbar d-flex justify-content-between align-items-center app-container ">

      <button className="menu-button d-md-none" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>


      <div className={`topbar-icons ${isOpen ? 'open' : ''}`}>
        <Link to={'/Wishlist'}>  <i className="fa-regular fa-heart my-3" onClick={handleLinkClick}> المفضلة</i></Link>
        <span className="roadblock">|</span>
        <Link to={'/Cart'}>   <i className="fas fa-shopping-cart my-3" onClick={handleLinkClick}>  عربة التسوق</i></Link>
        <span className="roadblock">|</span>
        <i className="fa-regular fa-user my-3" onClick={handleOpenModal}> تسجيل الدخول</i>
      </div>

      <div className="input-group  w-50">
        <input
          type="text"
          className="form-control rounded-5 search-bar"
          placeholder="ابحث عن منتجاتك..."
        />
        <span className="input-group-text search-icon">
          <i className="fas fa-search"></i>
        </span>
      </div>




      <div className="lang d-flex align-items-center">
        <img src={us} className="px-1 w-75" alt="لوجو الإنجليزية" />
        <img className="px-1 w-75" src={sa} alt="لوجو السعودية" />
      </div>


      <RegisterModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}
