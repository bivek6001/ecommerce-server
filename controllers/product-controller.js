const Product= require("../models/product-model")

const getAllProduct= async (req, res)=>{

    try {
        const products= await Product.find();
        return res.json({success: true,products});
        
    } catch (error) {

        return res.json({success: false,message: error.message});
        
    }



}
const getProductById= async (req, res)=>{
try {
    const product= await Product.findById(req.params.id);
    if(!product) return res.json({success: false, message: 'Product not found'});
    return res.json({success: true, product});
    
} catch (error) {
    return res.json({success: false,message: error.message});
    
}


}

module.exports={getAllProduct,getProductById}