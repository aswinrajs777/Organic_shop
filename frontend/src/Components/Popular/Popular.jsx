import React,{useEffect,useState} from 'react'
import './Popular.css'
import data_product from '../Assests/data'
import Item from '../Item/Item'
export const Popular = () => {

  const baseUrl = "https://organic-shop-f3iu.onrender.com";
  const [data_product,setData_Product] = useState([]);
  useEffect(()=>{
    fetch(baseUrl+"/popularinsoap").then((response)=>response.json()).then((data)=>setData_Product(data));
  },[])

  return (
    <div className='popular'>
        <h1>POPULAR IN SOAP</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item,i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}
