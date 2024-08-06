import React,{createContext,useEffect,useState} from "react";


export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart ={};
    for (let index = 0; index < 300+1; index++) {
        cart[index]=0
    }
    return cart
}

const ShopContextProvider =(props)=>{
    const baseUrl = "https://organic-shop-f3iu.onrender.com";
    const [all_product,setAll_Product]=useState([]);
    const [cartItems,SetCartItems]=useState(getDefaultCart());    
    useEffect(()=>{
        fetch(baseUrl+'/allproducts').then((Response)=>Response.json()).then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token'))
        {
            fetch(baseUrl+"/getcart",{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:"",
            }).then((Response)=>Response.json()).then((data)=>SetCartItems(data))
        }
    },[])

    const addToCart =(itemId)=>{
        
        SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch(baseUrl+'/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((Response)=>Response.json())
            .then((data)=>console.log(data));
        }
        
        
    }
    const removeFromCart =(itemId)=>{
        SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch(baseUrl+'/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((Response)=>Response.json())
            .then((data)=>console.log(data)); 
        }
    }

   
    
    const getTotalCartItems =() =>{
        let totalItem=0;
        for(let item in cartItems)
        {
            if(cartItems[item]!==0)
            {
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue={getTotalCartItems,all_product,cartItems,addToCart,removeFromCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;