import React from 'react';
import './DescriptionBox.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function DescriptionBox() {
  return (
    <div className="container descriptionbox">
      <div className="row descriptionbox-navigator">
        <div className="col-6 col-md-3 p-2 text-center border descriptionbox-nav-box">
          Description
        </div>
        <div className="col-6 col-md-3 p-2 text-center border descriptionbox-nav-box fade">
          Review (122)
        </div>
      </div>
      <div className="row descriptionbox-description mt-4 p-4">
        <div className="col-12 mb-3">
          <p>
            Enriched with the goodness of olive oil, coconut oil, and shea butter, our Natural Bliss Soap is a harmonious fusion of nature's nourishing elements. Each ingredient is thoughtfully selected for its moisturizing and soothing properties, ensuring a gentle cleanse that leaves your skin feeling soft and supple.
          </p>
        </div>
        <div className="col-12">
          <p>
            Elevate your daily cleansing routine with the Natural Bliss Soap – a celebration of nature's purity and a luxurious treat for your skin. Imbibe the essence of the great outdoors and embrace the beauty that comes from using a soap that nurtures and cares for your skin in the most natural way possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionBox;
