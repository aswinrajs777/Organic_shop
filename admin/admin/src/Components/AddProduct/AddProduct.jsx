import React ,{useState} from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
import { storage } from "../firebase"; // Correct path to firebase.js
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify'



const AddProduct = () => {
  const baseUrl = "https://organic-shop-f3iu.onrender.com";
    const [image,setImage] =useState(false);
    const [productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"",
        old_price:"",
        new_price:"",
        desc:""
    })

    const [image1, setImage1] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        if (e.target.files[0]) {
        setImage1(e.target.files[0]);
        setImage(e.target.files[0]);
        }
    };


    const handleUpload = () => {
        const storageRef = ref(storage, `images/${image1.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image1);
    
        uploadTask.on(
          "state_changed",
          snapshot => {
            // Progress function
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            // Error function
            console.log(error);
          },
          () => {
            // Complete function
            getDownloadURL(uploadTask.snapshot.ref).then(url => {
              setUrl(url);
              setImage(url);
              console.log(url);
              toast.success("image uploaded")
            });
          }
        );
      };


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

       
        product.image=url;
        if(product.category==="" || product.name==="" || product.new_price==="" || product.old_price==="")
        {
          toast.error("Fill All the feilds",{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });              
        }
        else if(product.image === "" ){
          toast.error("upload image!",{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            }); 
        }
        else
        {
          console.log(product)
          await fetch(baseUrl+'/addproduct',{
              method:'POST',
              headers:{
                  Accept:'application/json',
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(product),
          }).then((resp)=>resp.json()).then((data)=>{
              data.success?toast.success("Producted Added successfully"):toast.error("Failed")
              
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
        <div className="addproduct-itemfeild">
            <p>Product Description</p>
            <input value={productDetails.desc} onChange={changeHandeler} type="text" name='desc' placeholder='type here'/>
        </div>
        <div className='addproduct1'>
        <progress value={progress} max="100" />
        <br/>
            <label htmlFor="file-input">
                <img src={url?url:upload_area} className='addproduct-thumbnail-img' alt="" />
            </label>
            
            <br />
            <input  type="file" onChange={handleChange} />
            <br />
            <br />
            <button className='imageupload-btn' onClick={handleUpload}>Upload image</button>
        </div>
        <button onClick={()=>{add_product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct