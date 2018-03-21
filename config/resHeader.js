/*
 * @Author: ZXY 
 * @Date: 2018-03-18 22:11:09 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-03-20 16:35:59
 */

function resHeader(req, res, next){
   // console.log("------------------------------",req);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("XDomainRequestAllowed", "true");
    res.header("X-Powered-By", '3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
}
module.exports = resHeader;