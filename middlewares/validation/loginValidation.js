const IRCheck = require("ircheck");
const asyncHandler = require("express-async-handler");

exports.loginValidate = asyncHandler((req,res,next) => {
    try {
        let userInfo = req.body;
        if (!userInfo.password 
            || typeof userInfo.password !== "string" 
            || userInfo.password.search(/(\s)/g) !== -1)
        {
            return res.status(403).send("پسورد وارد شده اشتباه است");   
        }
        if (!userInfo.phoneNumber 
            || typeof (userInfo.phoneNumber * 1) !== "number" 
            || !IRCheck.Phone.isMobile(userInfo.phoneNumber)) {
            return res.status(403).send("شماره همراه وارد شده اشتباه است");
        }
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
});