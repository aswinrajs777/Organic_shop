import React, { useEffect, useState } from 'react';
import './Popular.css';
import RelatedItem from '../Relateditems/Relateditem';

export const Popular = () => {
  const baseUrl = "https://organic-shop-f3iu.onrender.com";
  const [data_product, setData_Product] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/popularinsoap")
      .then((response) => response.json())
      .then((data) => setData_Product(data));
  }, []);

  return (
    <div className='container popular'>
      <h1 className='text-center'>POPULAR IN SOAP</h1>
      <hr />
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
        {data_product.map((item,i) => (
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
};

export default Popular;
