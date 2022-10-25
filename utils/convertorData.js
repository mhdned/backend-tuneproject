const moment = require("moment-jalaali");
const bcrypt = require('bcrypt');

module.exports = {
    dateToTimeZone : function (date){
        console.log(`Date : ${date}`);
        date = moment(date).format('X');
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
    compareTimeZone : function (x) {
        return x;
    }
}