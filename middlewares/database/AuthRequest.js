const asyncHandler = require("express-async-handler");
const axios = require('axios');
const {
    ipdbregister,
    ipdblogin
} = require('./../../configs/config')
// const {logAndRes} = require("./../../utils/helperFunc")

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
            res.status(201).json({
                status : 'Success | 201',
                route : resp.data.route,
                token : resp.data.token,
                user : {
                    userName : resp.data.user.userName ,
                    email : resp.data.user.email ,
                    role : resp.data.user.role ,
                }
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})

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