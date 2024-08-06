import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'
import RelatedItem from "../Relateditems/Relateditem"
const  NewCollections = () => {

  const [new_arrival,setNew_arrival] = useState([]);
  const baseUrl = "https://organic-shop-f3iu.onrender.com";
  useEffect(()=>{
    fetch(baseUrl+"/newcollections").then((response)=>response.json()).then((data)=>setNew_arrival(data));
  },[])
  return (
    <div className='container related-products'>
      <h1>Related Products</h1>
      <hr />
      <div className="row">
        {new_arrival.map((item, i) => (
          <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-4">
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
  )
}

export default  NewCollections