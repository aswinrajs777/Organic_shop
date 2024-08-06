import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RelatedProducts.css';
import data_product from '../Assests/data';
import RelatedItem from '../Relateditems/Relateditem';

function RelatedProducts() {
  return (
    <div className='container related-products'>
      <h1>Related Products</h1>
      <hr />
      <div class="card-deck">
        {data_product.map((item, i) => (
          <div key={i} className="col-lg-3 col-md-4 col-sm-8 mb-4">
            <RelatedItem 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
