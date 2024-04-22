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

    const [all_product,setAll_Product]=useState([]);
    const [cartItems,SetCartItems]=useState(getDefaultCart());    
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts').then((Response)=>Response.json()).then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token'))
        {
            fetch("http://localhost:4000/getcart",{
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
            fetch('http://localhost:4000/addtocart',{
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
            fetch('http://localhost:4000/removefromcart',{
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

    const getTotalCartAmount = ()=>{
        
        let totalAmount=0;
        //function not working
        // for(let item in cartItems)
        // {                   
        //     if(cartItems[item]===0)
        //     {
            
        //      let iteminfo = all_product.find((product)=>product.id===Number(item))  
        //      console.log(iteminfo)
        //      totalAmount=totalAmount+iteminfo.new_price*cartItems[item];
        //      console.log(totalAmount)

        //     }
        //     return totalAmount;
        // }
        //#
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

    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;