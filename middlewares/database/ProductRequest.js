/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
const axios = require('axios');
const {ipdbproduct} = require('./../../configs/config')
/*------<CREATE NEW PRODUCT>------*/
exports.addProduct = asyncHandler (async (req,res,next) => {
    try {
        const product = req.product;
        const newProduct = new Object({
            title : product.title,
            price : product.price,
            entities : product.entities,
            userId : req.userId
        })
        const resp = await axios.post(ipdbproduct,newProduct);
        if (resp) {
            req.data = {
                title : resp.data.product.title,
                price : resp.data.product.price,
                entities : resp.data.product.entities,
            };
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<ALL PRODUCT>------*/
exports.allProdcut = asyncHandler (async (req,res,next) => {
    try {
        const resp = await axios.get(ipdbproduct);
        if (resp) {
            req.data = resp.data;
            req.data.products.forEach(el => {
                // delete el._id;
                delete el.userId;
                delete el.updatedAt;
                delete el.createdAt;
                delete el.__v;
            });
            return res.json(req.data);
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<SINGLE PRODUCT>------*/
exports.singleProduct = asyncHandler(async(req,res,next) => {
    try {
        const resp = await axios.get(`${ipdbproduct}/${req.params.prodID}`);
        if (resp.data.status !== 'failed') {
            req.data = resp.data;
            delete req.data.product._id;
            delete req.data.product.userId;
            delete req.data.product.updatedAt;
            delete req.data.product.createdAt;
            delete req.data.product.__v;
            next()
        }else{
            return res.status(404).json({
                status : resp.data.status,
                message : "این محصول وجود ندارد"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<USER BUY SINGLE PRODUCT>------*/
exports.buyProduct = asyncHandler(async(req,res,next) => {
    try {
        const resp = await axios.post(`${ipdbproduct}/${req.params.prodID}`,req.pay);
        if (resp) {
            req.data = resp.data;
            return res.send(req.data);
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})