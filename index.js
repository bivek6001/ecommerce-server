const express=require('express');
const app = express();
const dotenv=require("dotenv");
const cors=require("cors");
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
app.use(express.json());
app.use("/user",userRoutes);
app.use("/product",productRoutes);
app.use("/order",orderRoutes);
// app.use("/admin",adminRoutes);

app.listen(process.env.PORT,()=>{
    console.log('Server running on port '+process.env.PORT);
})



