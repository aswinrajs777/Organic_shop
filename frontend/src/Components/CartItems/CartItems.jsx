  import React, { useContext } from 'react';
  import './CartItems.css';
  import { ShopContext } from '../../Context/ShopContext';
  import { toast } from 'react-toastify';
  import remove_icon from '../Assests/cart_cross_icon.png';
  import { Link } from 'react-router-dom';

  function CartItems() {
    let tot = 0;
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
      <div className='container cartitems'>
        <div className="row text-center mb-3">
          <div className="col-2 col-sm-2"><p>Product</p></div>
          <div className="col-4 col-sm-2"><p>Title</p></div>
          <div className="col-2 col-sm-2"><p>Price</p></div>
          <div className="col-2 col-sm-2"><p>Quantity</p></div>
          <div className="col-2 col-sm-2"><p>Total</p></div>
          <div className="col-1 col-sm-2"><p>Remove</p></div>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            tot = tot + (e.new_price * cartItems[e.id]);
            return (
              <div key={e.id} className="row text-center align-items-center mb-3">
                <div className="col-2 col-sm-2">
                  <img src={e.image} className='img-fluid carticon-product-icon' alt={e.name} />
                </div>
                <div className="col-4 col-sm-2">{e.name}</div>
                <div className="col-2 col-sm-2">Rs {e.new_price}</div>
                <div className="col-2 col-sm-2">
                  <button className='btn btn-outline-secondary cartitems-quantity'>{cartItems[e.id]}</button>
                </div>
                <div className="col-2 col-sm-2">Rs {e.new_price * cartItems[e.id]}</div>
                <div className="col-1 col-sm-2">
                  <img
                    className='cartitems-remove-icon'
                    src={remove_icon}
                    onClick={() => { removeFromCart(e.id); toast.error(`${e.name} Removed from cart`); }}
                    alt="Remove"
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
        <hr />
        <div className="row cartitems-down">
          <div className="col-md-6 mb-3">
            <div className="card cartitems-total">
              <div className="card-body">
                <h5 className="card-title">Cart Totals</h5>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Subtotal</span>
                  <span>Rs {tot}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>Shipping Fee</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <h4>Total</h4>
                  <h4>Rs {tot}</h4>
                </div>
              </div>
            </div>
            <Link to="/proceedtopay">
              <button className='btn btn-primary w-100 mt-3'>PROCEED TO CHECKOUT</button>
            </Link>
          </div>
          <div className="col-md-6 cartitems-promocode">
            <p>If you have a promo code, enter it here.</p>
            <div className="input-group">
              <input type="text" className="form-control" placeholder='Promo code' />
              <button className='btn btn-outline-secondary'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default CartItems;
