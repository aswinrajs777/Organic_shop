import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
      <div className='item card h-100 d-flex flex-column'>
        <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)} className="flex-grow-1 d-flex flex-column">
          <div className="item-image-wrapper">
            <img src={props.image} alt={props.name} className="item-image card-img-top" />
          </div>
          <div className="card-body d-flex flex-column">
            <p className="card-text">{props.name}</p>
            <p className="item-description text-muted flex-grow-1">{props.description}</p>
          </div>
        </Link>
        <div className="card-footer">
          <div className='item-price d-flex justify-content-between align-items-center'>
            <div className="item-price-new">
              Rs {props.new_price}
            </div>
            <div className="item-price-old text-muted text-decoration-line-through">
              Rs {props.old_price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
