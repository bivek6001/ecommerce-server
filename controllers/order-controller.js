const Order= require("../models/order.js");
const User = require("../models/user-model.js");
const createOrder= async(req,res)=>{
    try {
        const user= req.id;
        const exist= await User.findOne({_id: user});
        if(!exist) return res.json({success:false, message:"User not found"});
        const newOrder= await Order.create({
            user: user,
            product: req.body.product,
            address: req.body.address,
            quantity: req.body.quantity,
           
            status: "pending"
          
          
        })
        if(newOrder){
            exist.orders.push(newOrder._id);
            await exist.save();
            return res.json({success:true, order: newOrder, message: "Order created successfully"});
        }
        // return res.json({success:true, order: newOrder, message: "Order created successfully"});
       

        
    } catch (error) {
        return res.json({success:false, message:error.message});
    }
}
const updateOrder= async(req,res)=>{
    try {
        
    } catch (error) {
        return res.json({success:false, message:error.message});
    }
}

const getOrders= async(req,res)=>{
    try {
        const orders= await Order.find()
        return res.json({success:true, orders});
    } catch (error) {
        return res.json({success:false, message:error.message});
    }
}



module.exports={createOrder, updateOrder, getOrders};