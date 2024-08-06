import React from 'react';
import './Footer.css';
import footer_logo from '../Assests/logo_footer.png';
import instgram_icon from '../Assests/instagram_icon.png';
import whatsapp_icon from '../Assests/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer className='footer bg-green text-white py-4'>
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          <div className="col-12 col-md-3 mb-3 mb-md-0">
            <div className="footer-logo d-flex justify-content-center justify-content-md-start align-items-center">
              <img src={footer_logo} alt="Footer Logo" className="img-fluid rounded-circle" />
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <ul className="footer-links list-unstyled d-flex flex-column flex-md-row justify-content-center mb-0">
              <li className="mb-2 mb-md-0 me-md-3">Company</li>
              <li className="mb-2 mb-md-0 me-md-3">Products</li>
              <li className="mb-2 mb-md-0 me-md-3">Office</li>
              <li className="mb-2 mb-md-0 me-md-3">About</li>
              <li className="mb-2 mb-md-0">Contact</li>
            </ul>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end align-items-center">
            <div className="footer-social-icons d-flex">
              <div className="footer-icons-container me-2">
                <img src={instgram_icon} alt="Instagram Icon" className="img-fluid" />
              </div>
              <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="WhatsApp Icon" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center mt-4">
          <hr className="border-light" />
          <p className="mb-0">Copyright © 2024 - All Rights Reserved.</p>
          <hr className="border-light" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
