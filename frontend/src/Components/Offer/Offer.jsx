import React from 'react'
import './Offer.css'
import exclusive_img from '../Assests/exclusive_img.webp'
const offer = () => {
  return (
    <div className='offer'>
        <div className="offer-left">
            <h1>Exclussive</h1>
            <h1>Offers For You</h1>
            <p>Only on Best Selling Products</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
          <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default offer