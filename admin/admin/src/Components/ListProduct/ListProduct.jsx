import React,{useState,useEffect} from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
const ListProduct = () => {

  const [allproducts,setAllProducts]=useState([])

  const fetchinfo=async()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }
  useEffect(()=>{
    fetchinfo();
  },[])

  const remove_product=async(id)=>{
    await fetch("http://localhost:4000/removeproduct",{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchinfo();
  }

  return (

    <div className='list-product'>
        <h1>All Products Lists</h1>
        <div className="listproduct-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Old_Price</p>
          <p>New_price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproducts-allproducts">
          <hr/>
          {allproducts.map((product,index)=>{
            return <>
            <div key={index} className='listproduct-format-main listproduct-format'>
              <img src={product.image} className='listproduct-icon' alt="" />
              <p>{product.name}</p>
              <p>Rs{product.old_price}</p>
              <p>Rs{product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
            </div>
            </>
          })}
        </div>
    </div>
  )
}

export default ListProduct