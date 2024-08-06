import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assests/dropdown_icon.png';
import Item from '../Components/Item/Item';

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category container'>
      <img className='shopcategory-banner fixed-size' src={props.banner} alt="Shop Category Banner" />
      <div className="shopcategory-indexSort d-flex justify-content-between align-items-center mt-3">
        <p className="mb-0">
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort d-flex align-items-center">
          Sort by <img src={dropdown_icon} alt="Sort Dropdown Icon" className="ms-2" />
        </div>
      </div>
      
      <div className="shopcategory-products row">
        {all_product.map((item, i) => {
          if (props.category === item.category || props.category === 'allproduct') {
            return <Item key={i} id={item.id} name={item.name} image={item.image} description={item.description} new_price={item.new_price} old_price={item.old_price} />;
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore text-center my-3">
        <button className="btn btn-primary">Explore More</button>
      </div>
    </div>
  );
}

export default ShopCategory;
