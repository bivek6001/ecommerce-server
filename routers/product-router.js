const express=require('express');
// const { signin, signup } = require('../controllers/user-controller');
const {getAllProduct,getProductById}= require("../controllers/product-controller.js")
const router=express.Router();


router.get("/",getAllProduct);
// router.post("/signin",signin);
router.get("/:id",getProductById);

module.exports = router;