const mongoose=require('mongoose');

const orderSchema= new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  product:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product'
  }],
  status:{
    type:String,
    default:"pending"
  },
  address:{
    type:Object
  },
  quantity:Number,
  totalPrice:Number,
  payment:{
    type:String,
    default:"cash on delivery"
  }

},{timestamps:true})

const Order= mongoose.model('Order',orderSchema)
module.exports = Order;