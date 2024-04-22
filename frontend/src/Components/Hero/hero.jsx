import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_img from '../Assests/hero_img.png'
const hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrival only</h2>
            <div>
                <div className="hero-hand-icon">
                    
                    <img src={hand_icon} alt="" />
                </div>
                <p>100% Pure Organic Products</p>
            </div>
            <div className="hero-latest-btn">
                <div>Trending Products</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default hero