import React, { useState } from 'react'
import './CSS/Loginsignup.css'
const LoginSignup = () => {
  const baseUrl = "https://organic-shop-f3iu.onrender.com";
  const [state,setState]=useState("Login");
  const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login =async()=>{
    let responseData;
    await fetch(baseUrl+"/login",{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((Response)=>Response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      localStorage.setItem('name',responseData.name);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  const signup=async()=>{
    let responseData;
    await fetch(baseUrl+"/signup",{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((Response)=>Response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      localStorage.setItem('name',responseData.name);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-feilds">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your name' id="" />:<></>}
          <input type="email" placeholder='Email' name="email" value={formData.email} onChange={changeHandler} />
          <input type="password" placeholder='password' name="password" value={formData.password} onChange={changeHandler} id="" />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className='loginsignup-login'>Already have an account?<span onClick={()=>{setState("Login")}}>Login</span></p>:<></>}
        {state==="Login"?<p className='loginsignup-login'>Dont have an account?<span onClick={()=>{setState("Sign Up")}}>Sign Up</span></p>:<></>}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing,i agree to the terms of use.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup