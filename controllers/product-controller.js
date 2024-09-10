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

const getProductByFilter = async(req,res)=>{
    try {
        const brand= req.query.brand;
        const sort= req.query.sort
        const order= req.query.order

        
        
        if(order && sort){
            const products= await Product.find().sort({sort:order});
            return res.json({success: true, products});
        }
       
    } catch (error) {
        return res.status(500).json({message: error.message,success: false});
    }





}

const sortProduct= async (req,res)=>{
    try {
  
        const field= req.query.sortOrder;
        const products= await Product.find().sort({field: sortOrder});
        return res.json({success: true, products});
        
    } catch (error) {
        
    }
}


module.exports={getAllProduct,getProductById,getProductByFilter}