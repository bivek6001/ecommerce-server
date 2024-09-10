const express=require('express');
const app = express();
const dotenv=require("dotenv");
const cors=require("cors");
const Razorpay= require("razorpay")
dotenv.config();
const userRoutes=require("./routers/user-router.js");
const connectDB = require('./db.js');
const orderRoutes=require("./routers/order-router.js");
// const adminRoutes=require("./routers/admin-router.js");
const productRoutes=require("./routers/product-router.js");

connectDB();
app.use(cors({
    exposedHeaders:"token"
}));
// app.use(express.urlencoded())
app.use(express.json());
app.use("/user",userRoutes);
app.use("/product",productRoutes);
app.use("/order",orderRoutes);
// app.use("/admin",adminRoutes);
app.post('/checkout',async (req,res)=>{
    const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY,
        key_secret: process.env.RAZORPAY_SECRET
    });
    const order= await razorpay.orders.create({
amount:9000,
currency:"INR",
receipt:"trryry"
    })
    console.log(order)
    return res.json({sucess:true,order})
})

app.post("/verification",(req,res)=>{
  res.redirect("http://localhost:3000/order-success")
})
app.listen(process.env.PORT,()=>{
    console.log('Server running on port '+process.env.PORT);
})



