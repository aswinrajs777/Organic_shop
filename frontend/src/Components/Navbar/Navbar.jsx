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
import { CiShoppingCart } from "react-icons/ci";

export const Navbar = () => {

  const[menu,setMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Organic Shop</p>
      </div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link className='no-underline' to='/'>Shop</Link> {menu==='shop'?<hr/>:<></>}</li>
          <div className="dropdown" onClick={toggleDropdown}>
          <li href="#dropdown" className="no-underline">
            Products <img src={drop_icon} height='8px'></img> {menu==='product'?<hr/>:<></>}
          </li>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <li href="#item1" onClick={()=>{setMenu("product")}}><Link to='/oil'>oil</Link></li>
              <li href="#item2" onClick={()=>{setMenu("product")}}><Link to='/soap'>soap</Link></li>
              <li href="#item3" onClick={()=>{setMenu("product")}}><Link to='/Shampoo'>shampoo</Link></li>
            </div>
          )}
        </div>
          <li onClick={()=>{setMenu("about")}}><Link className='no-underline' to='/About'>About</Link> {menu==='about'?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("All products")}}><Link className='no-underline' to='/allproduct'>All Products</Link> {menu==='All products'?<hr/>:<></>}</li>
        </ul>
        
        <div className="nav-cart-login">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token','name');window.location.replace('/')}}>Logout</button>:<Link to='/Login'><button>Login</button></Link>}
          {localStorage.getItem('auth-token')?<div className='profile'><AiOutlineUser className='profile-icon'  style={{color: '#ffffff',}} /><p className='profile-name'>{localStorage.getItem('name')}</p></div>:<div className='profile'><AiOutlineUser className='profile-icon'  style={{color: '#ffffff',}} /></div>}
          <Link to='/Cart'>< CiShoppingCart className='cart-icon' /></Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
        
      
    </div>
  )
}
