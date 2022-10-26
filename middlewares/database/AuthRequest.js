/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
const axios = require('axios');
const {
    ipdbregister,
    ipdblogin
} = require('./../../configs/config')
// const {logAndRes} = require("./../../utils/helperFunc")
/*------<AUTH USER | CREATE NEW USER>------*/
exports.auth = asyncHandler(async (req,res,next) => {
    try {
        const newUser = new Object({
            userName : req.body.userName,
            fullName : req.body.fullName,
            password : req.body.password,
            email : req.body.email,
            phoneNumber : req.body.phoneNumber,
            nationalCode : req.body.nationalCode,
            birth : req.body.birth
        })
        // logAndRes(res,newUser)
        const resp = await axios.post(ipdbregister,newUser);
        if (resp) {
            req.data = resp.data;
            req.userId = resp.data.user._id
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<AUTH USER | LOGIN USER>------*/
exports.login = asyncHandler(async (req,res,next) => {
    try {
        const newUser = new Object({
            password : req.body.password,
            phoneNumber : req.body.phoneNumber,
        })
        // logAndRes(res,newUser)
        const resp = await axios.post(ipdblogin,newUser);
        if (resp) {
            req.data = resp.data;
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
});