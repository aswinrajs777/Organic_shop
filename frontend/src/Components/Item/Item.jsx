import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
      <div className='item card'>
        <Link className='item-link' to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
          <div className="item-image-wrapper">
            <img src={props.image} alt={props.name} className="item-image card-img-top" />
          </div>
          <div className="card-body">
            <p className="card-text">{props.name}</p>
            <p className="item-description text-muted">{props.description}</p>
            <div className='item-price d-flex justify-content-between align-items-center'>
              <div className="item-price-new">
                Rs {props.new_price}
              </div>
              <div className="item-price-old text-muted text-decoration-line-through">
                Rs {props.old_price}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Item;
