import React,{useState} from 'react'
import './Navbar.css'
import logo from '../Assests/logo.jpg'
import drop_icon from '../Assests/dropdown_icon.png'
import cart_icon from '../Assests/cart_icon.png'
import white_cart_icon from '../Assests/white_cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { AiOutlineUser } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';

import { CiShoppingCart } from "react-icons/ci";

export const Navbar = () => {

  const[menu,setMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
          <span>Organic Shop</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${menu === 'shop' ? 'active' : ''}`} to="/" onClick={() => setMenu('shop')}>Shop</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={toggleDropdown}>
                Products 
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/oil" onClick={() => setMenu('product')}>Oil</Link></li>
                <li><Link className="dropdown-item" to="/soap" onClick={() => setMenu('product')}>Soap</Link></li>
                <li><Link className="dropdown-item" to="/shampoo" onClick={() => setMenu('product')}>Shampoo</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${menu === 'about' ? 'active' : ''}`} to="/About" onClick={() => setMenu('about')}>About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${menu === 'allProducts' ? 'active' : ''}`} to="/allproduct" onClick={() => setMenu('allProducts')}>All Products</Link>
            </li>
          </ul>
          <Link to="/Cart" className="position-relative me-2">
              <CiShoppingCart  className='cart-icon' />
              <span className="badge bg-secondary  top-0 start-100 translate-middle cart-count">{getTotalCartItems()}</span>
          </Link>
          <div className="d-flex align-items-center">
            {localStorage.getItem('auth-token') ? (
              <>
                <button className="btn btn-outline-light me-2" onClick={()=>{localStorage.removeItem('auth-token','name');window.location.replace('/')}}>Logout</button>
                <div className="d-flex align-items-center">
                  <AiOutlineUser className="me-1" />
                  <span className="me-3">{localStorage.getItem('name')}</span>
                </div>
              </>
            ) : (
              <Link to="/Login" className="btn btn-outline-light me-2">Login</Link>
            )}
            
          </div>
        </div>
      </div>
    </nav>
  )
}
