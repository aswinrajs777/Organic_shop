import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_footer.png'
import instgram_icon from '../Assests/instagram_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            {/* <p>Organic Shop</p> */}
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instgram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
            <hr />
        </div>
    </div>
  )
}

export default Footer