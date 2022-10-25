const IRCheck = require("ircheck");
const validator = require("validator");
const asyncHandler = require("express-async-handler");

const {dateToTimeZone,passToHash} = require('./../../utils/convertorData')

exports.updateValidate = asyncHandler((req,res,next) => {
    try {
        let userInfo = req.body;
        if(userInfo.userName){
            if (typeof userInfo.userName !== "string") {
                return res.status(403).send("نام کاربری اشتباه است");
            }
        }
        if (userInfo.fullName) {
            if (typeof userInfo.fullName !== "string") {
                return res.status(403).send("نام وارد شده اشتباه است");
            }  
        }
        if (userInfo.email) {
            if (typeof userInfo.email !== "string" 
                || !validator.isEmail(userInfo.email)) {
                return res.status(403).send("ایمیل وارد شده اشتباه است");
            }
        }
        if (userInfo.password) {
            if (!userInfo.passwordConfirm 
                || typeof userInfo.password !== "string" 
                || userInfo.password.search(/(\s)/g) !== -1
                || userInfo.password !== userInfo.passwordConfirm)
            {
                return res.status(403).send("پسورد وارد شده اشتباه است");   
            }
        }
        if (userInfo.phoneNumber ) {
            if (typeof (userInfo.phoneNumber * 1) !== "number" 
                || !IRCheck.Phone.isMobile(userInfo.phoneNumber)) {
                return res.status(403).send("شماره همراه وارد شده اشتباه است");
            }   
        }

        if (userInfo.birth) {
            if(typeof userInfo.birth !== "string"){
                return res.status(403).send("تاریخ تولد وارد شده اشتباه است");
            }
        }

        if (userInfo.nationalCode) {
            if(!IRCheck.National.isNationalCodeValid(userInfo.nationalCode)){
                return res.status(403).send("شماره ملی وارد شده اشتباه است");
            }
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
});

exports.convertUpdateData = asyncHandler((req,res,next) => {
    try {
        // hash password and change date to timezone
        if (req.body.birth) {
            req.body.birth = dateToTimeZone(req.body.birth);
            // console.log(moment(req.body.birth,'X').format('YYYY/MM/DD'));
        }
        if (req.body.password) {
            req.body.password = passToHash(req.body.password);
            // console.log(req.body.password);       
        }
        if (req.body.nationalCode) {
            req.body.nationalCode = passToHash(req.body.nationalCode);
            // console.log(req.body.nationalCode);
        }
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("مشکلی رخ داده است");
    }
})