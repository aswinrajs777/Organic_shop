const port=4000;
const express=require("express");
const app= express()
const mongoose=require("mongoose")
const jwt =require("jsonwebtoken")
const multer =require("multer")
const path=require("path")
const cors =require("cors");
const { error } = require("console");
const { type, userInfo } = require("os");

app.use(express.json());
app.use(cors());

//Data base connection with mongidb
mongoose.connect("mongodb+srv://aswinrajs777:asrith123@cluster0.aitu5aq.mongodb.net/")

//API creation
mongoose.connection.on("error", err => {
    console.error("MongoDB connection error:", err);
});

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});

// API creation
app.get("/", (req, res) => {
    res.send("Express App is running");
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});

//Image storage engine

// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload =multer({storage:storage})

//Upload endpoint for image
// app.use('/images',express.static('upload/images'))
// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })


//schema for product creation db
const Product = mongoose.model("Product",{
    id:{
        type : Number,
        required:true,
    },
    name:{
        type : String,
        required:true,
    },
    image:{
        type : String,
        required:true,
    },
    category:{
        type : String,
        required:true,
    },
    new_price:{
        type : Number,
        required:true,
    },
    old_price:{
        type : Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type : Date,
        default:Date.none,
    },
    available:{
        type:Boolean,
        default:true,
    }
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;
    }
    const product =new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        description:req.body.desc
    })
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,    
    })
})

//api for deleting product

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed")
    res.json({
        success:true,
        name:req.body.name,
    })
})


//API for fetching all products

app.get('/allproducts',async(req,res)=>{
    const products=await Product.find({});
    console.log("Fetched all products");
    console.log(products);
    res.send(products)
})



//schema for user creation
const Users = mongoose.model("Users",{
    username:{
        type : String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    data:
    {
        type:Date,
        default:Date.now,
    }
    
})

//api for signup
app.post('/signup',async(req,res)=>{
    const name=req.body.username;
    let check=await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"User found with same email already!!"});
    }
    let cart={};
    for(let i=0;i<300;i++)
    {
        cart[i]=0;
    }

    const user =new Users({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data={
        user:{
            id:user.id,

        }
    }
    const token=jwt.sign(data,'secret_ecom');
    res.json({success:true,token:token,name:name});
})

//cerating api for login

app.post('/login',async(req,res)=>{
    let user=await Users.findOne({email:req.body.email});
    if(user)
    {
        let passcheck=req.body.password===user.password;
        if(passcheck)
        {
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom');
            const name=user.username;
            res.json({success:true,token:token,name:name});
        }
        else{
            res.json({success:false,errors:"password Wrong!!!"});
        }
    }
    else{
        res.json({success:false,error:"email not found"});
    }
})


//api for new collections

app.get('/newcollections',async (req,res)=>{
    let product=await Product.find({});
    let newcollection=product.slice(1).slice(-8);
    console.log("Newcollection fetched");
    res.send(newcollection);
})


//api for popular in soap

app.get('/popularinsoap',async(req,res)=>{
    let products=await Product.find({category:"Soap"});
    let popular_in_soap =products.slice(0,4);
    console.log("featched soaps");
    res.send(popular_in_soap);
})

//api to fetch user
const fetchUser=async(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token)
    {
        res.status(401).send({errors:"please aunthneticate"})
    }
    else{
        try{
            const data=jwt.verify(token,'secret_ecom');
            req.user=data.user;
            next();
        }
        catch(error)
        {
            res.status(401).send({errors:"please aunthneticate"})

        }
    }
}

//api for addto cartitems for a user

app.post("/addtocart",fetchUser,async(req,res)=>{
    console.log("Added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]+=1;    
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added");
    console.log(req.body);
})

//api for remove cartitems for a user
app.post("/removefromcart",fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    {
        userData.cartData[req.body.itemId]-=1;
    }
        
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added");
    console.log(req.body);
})
//api for retriving cartitems for a user

app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("Getcart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData)
})