import React ,{useState} from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct = () => {
    const [image,setImage] =useState(false);
    const [productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"",
        old_price:"",
        new_price:""
    })

    const imageHanderler =(e)=>{
        setImage(e.target.files[0]);
    }

    const changeHandeler =(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const add_product= async ()=>{
        console.log(productDetails);
        let responseData;
        let product=productDetails;
        
        let formData=new FormData();
        formData.append('product',image);

        await fetch("http://localhost:4000/upload",{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=> resp.json()).then((data)=>{responseData=data});

        if(responseData.success)
        {
            product.image=responseData.image_url;
            console.log(product)
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product ADDED"):alert("Failed")
            })
        }

    }

  return (
    <div className='add-product'>
        <div className="addproduct-itemfeild">
            <p>Product Title</p>
            <input value={productDetails.name} onChange={changeHandeler} type="text" name='name' placeholder='type here'/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfeild">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandeler} type="text" name='old_price' placeholder='Type here'/>
            </div>
            <div className="addproduct-itemfeild">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandeler} type="text" name='new_price' placeholder='Type here'/>
            </div>
        </div>
        <div className="addproduct-itemfeild">
            <p>Product Category</p>
            <input value={productDetails.category} onChange={changeHandeler} type="text" name='category' placeholder='type here'/>
        </div>
        <div className='addproduct-itemfeild'>
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img' alt="" />
            </label>
            <input onChange={imageHanderler} type="file" name='image' id='file-input' hidden/>
        </div>
        <button onClick={()=>{add_product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct