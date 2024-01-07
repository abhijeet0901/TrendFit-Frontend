import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>TRENDFIT</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-conatiner">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-conatiner">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-conatiner">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @2024 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer