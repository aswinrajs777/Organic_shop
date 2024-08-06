import React from 'react';
import hand_icon from '../Assests/hand_icon.png';
import arrow_icon from '../Assests/arrow.png';
import hero_img from '../Assests/hero_img.png';

const Hero = () => {
  return (
    <div className='container-fluid hero' style={{ background: 'linear-gradient(180deg, #a3df81, #e1ffea22 60%)' }}>
      <div className='row'>
        <div className='col-lg-6 d-flex flex-column justify-content-center align-items-center'>
          <h2 className='text-center text-dark font-weight-bold mb-4' style={{ fontSize: '20px' }}>
            New Arrival only
          </h2>
          <div className='d-flex align-items-center gap-3'>
            <div className='hero-hand-icon d-flex align-items-center'>
              <img src={hand_icon} alt='' style={{ width: '105px' }} />
            </div>
            <p className='text-dark font-weight-bold' style={{ fontSize: 'calc(4vw + 10px)', lineHeight: '1.2' }}>
              100% Pure Organic Products
            </p>
          </div>
          <div className='hero-latest-btn d-flex justify-content-center align-items-center mt-5 px-4 py-3 rounded-pill bg-success text-white font-weight-bold' style={{ fontSize: 'calc(1vw + 10px)', cursor: 'pointer' }}>
            <div>Trending Products</div>
            <img src={arrow_icon} alt='' />
          </div>
        </div>
        <div className='col-lg-6 hero-right d-flex align-items-center justify-content-center'>
          <img src={hero_img} alt='' style={{ maxWidth: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
