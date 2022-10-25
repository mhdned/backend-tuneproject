const asyncHandler = require("express-async-handler");
const axios = require('axios');
const {ipdbticket} = require('./../../configs/config');

exports.sendTicket = asyncHandler(async (req,res,next) => {
    try {
        const ticket = new Object({
            title : req.body.title,
            description : req.body.description,
            userId : req.userId
        })
        const resp = await axios.post(ipdbticket,ticket);
        if (resp) {
            req.data = resp.data;
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
});

exports.allTicket = asyncHandler(async (req,res,next) => {
    try {
        const resp = await axios.get(`${ipdbticket}/${req.userId}`);
        if (resp) {
            req.data = resp.data;
        }
        return res.send(req.data);
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})