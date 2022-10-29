/*------<IMPORTS>------*/
const moment = require("jalali-moment");
const bcrypt = require('bcrypt');
/*------<FUNCTIONS>------*/
module.exports = {
    dateToTimeZone : function (date){
        console.log(`Date : ${date}`);
        date = moment(date).tz("Asia/Tehran").format('X');
        console.log(`TimeZone : ${date}`);
        return (date * 1);
    },
    passToHash : function (pass,index = 12) {
        pass = bcrypt.hashSync(pass,index);
        return pass;
    },
    timeZoneToDate : function (timezone) {
        timezone = moment(timezone,'X').format('YYYY/MM/DD');
        return timezone;
    },
    jalaliDate : function() {
        const date = moment(Date.now()).format('jYYYY/jMM/jDD');
        return date;
    },
    compareTimeZone : function (x) {
        return x;
    }
}