const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({

        title:String,
        description:String,
        price:Number,
        quantity:Number,
        rating:Number,
        stock:Number,
        tags:Array,
        brand:String,
        returnPolicy:String,
        weight:Number,
        warrantyInformation: String,
shippingInformation: String,
availabilityStatus: String,
        reviews: [{
                rating: Number,
                comment: String,
                user:{
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'User'
                }
    
        }],
        images: Array,
        categories: Array,
       thumbnail:String
        
});

const Product= mongoose.model('Product',productSchema);

module.exports=Product;




