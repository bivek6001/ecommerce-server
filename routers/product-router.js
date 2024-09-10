const express=require('express');

const {getAllProduct,getProductById, getProductByFilter}= require("../controllers/product-controller.js")
const router=express.Router();


router.get("/all",getAllProduct);
// router.post("/signin",signin);
router.get("/by/:id",getProductById);
// router.get("/brand",getProductByBrand);
router.get("/filter",getProductByFilter);
module.exports = router;