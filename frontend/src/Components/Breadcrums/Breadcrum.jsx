import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

function breadcrum(props) {
  const {product}=props;
  
  return (
    <div className='breadcrum '>
      HOME <img src={arrow_icon} alt=""  />SHOP<img src={arrow_icon} />{product.category}<img src={arrow_icon} /> {product.name}
    </div>
  )
}

export default breadcrum