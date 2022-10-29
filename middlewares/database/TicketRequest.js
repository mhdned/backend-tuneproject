/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
const axios = require('axios');
const {ipdbticket} = require('./../../configs/config');
const {dateToTimeZone,jalaliDate,timeZoneToDate} = require('./../../utils/convertorData');
/*------<SEND TICKET>------*/
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
/*------<ALL TICKET | ONLY FOR HIMSELF>------*/
exports.allTicket = asyncHandler(async (req,res,next) => {
    try {
        const resp = await axios.get(`${ipdbticket}/user/${req.userId}`);
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
/*------<ALL TICKET | ADMIN>------*/
exports.allTicketAdmin = asyncHandler(async(req,res,next) => {
    try {
        // return res.send("all ticket Admin")
        const resp = await axios.get(`${ipdbticket}`);
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
/*------<SINGLE TICKET | ADMIN>------*/
exports.singleTicketAdmin = asyncHandler(async(req,res,next) => {
    try {
        // return res.send(req.params.reqID)
        const resp = await axios.get(`${ipdbticket}/${req.params.reqID}`);
        if (resp) {
            req.data = resp.data;
        }
        return res.send(req.data);
        // next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})
/*------<ANSWER SINGLE TICKET | ADMIN>------*/
exports.singleTicketAdminAnswer = asyncHandler(async(req,res,next) => {
    try {
        req.body.date = dateToTimeZone(jalaliDate());
        const resp = await axios.put(`${ipdbticket}/${req.params.reqID}`,req.body);
        if (resp) {
            req.data = resp.data;
        }
        req.data.request.date = timeZoneToDate(req.data.request.date);
        return res.send(req.data);
        // next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})