import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './Offer.css';
import exclusive_img from '../Assests/exclusive_img.webp';

const Offer = () => {
  return (
    <div className="offer container-fluid">
      <div className="row justify-content-center align-items-center offer-content text-center">
        <div className="col-lg-6 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center offer-left">
          <h1 className="offer-heading">Exclusive</h1>
          <h1 className="offer-heading">Offers For You</h1>
          <p className="offer-text">Only on Best Selling Products</p>
          <button className="btn btn-lg offer-button">Check Now</button>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-12 d-flex justify-content-center align-items-center offer-right">
          <img src={exclusive_img} alt="Exclusive Offer" className="img-fluid offer-image" />
        </div>
      </div>
    </div>
  );
}

export default Offer;
