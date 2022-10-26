/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
const axios = require('axios');
const {ipdbuser,ipdbuser_un} = require('./../../configs/config')
/*------<FIND USER>------*/
exports.findUser = asyncHandler(async (req,res,next) => {
    try {
        const resp = await axios.get(`${ipdbuser}/${req.userId}`);
        if (resp) {
            req.userId = resp.data._id;
            req.user = resp.data;
            req.role = resp.data.role;   
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
});
/*------<UPDATE USER>------*/
exports.updateUser = asyncHandler(async (req,res,next) => {
    try {
        const resp = await axios.patch(`${ipdbuser}/${req.userId}`,req.body);
        if (resp) {
            req.userId = resp.data._id;
            req.user = resp.data;
            req.role = resp.data.role;   
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
});
/*------<GET ALL USER>------*/
exports.getAllUser = asyncHandler(async (req,res,next) => {
    try {
        const resp = await axios.get(`${ipdbuser}`);
        if (resp) {
            req.allUser = resp.data;
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<GET SINGLE USER>------*/
exports.getSingleUser = asyncHandler(async (req,res,next) => {
    try {
        const resp = await axios.get(`${ipdbuser_un}/${req.params.username}`);
        if (resp) {
            req.user = resp.data;
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<UPDATE SINGLE USER>------*/
exports.updateSingleUser = asyncHandler(async (req,res,next) => {
    try {
        const resp = await axios.put(`${ipdbuser_un}/${req.params.username}`,req.body);
        if (resp) {
            req.user = resp.data;
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<DELETE SINGLE USER>------*/
exports.deleteSingleUser = asyncHandler(async (req,res,next) => {
    try {
        const resp = await axios.delete(`${ipdbuser_un}/${req.params.username}`);
        if (resp) {
            req.user = resp.data;
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})