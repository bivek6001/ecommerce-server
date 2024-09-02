const express=require('express');
const {createOrder, updateOrder, getOrders} = require("../controllers/order-controller.js");
const authentication = require('../middlewares/authentication.js');
const router=express.Router();


router.post("/create",authentication,createOrder);
// router.put("/update/:id",updateOrder);
// router.get("/",getOrders);

module.exports = router;