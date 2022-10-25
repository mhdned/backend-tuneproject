const asyncHandler = require("express-async-handler");

exports.getProducts = asyncHandler(async (req,res,next) => {
    try {
        res.json(req.data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})

exports.getProduct = asyncHandler(async (req,res,next) => {
    try {
        res.json(req.data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})

exports.boughtProduct = asyncHandler(async (req,res,next) => {
    try {
        res.json(req.data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})