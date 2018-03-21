/*
 * @Author: ZXY 
 * @Date: 2018-03-20 13:41:18 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-03-20 16:32:09
 */

var loger=require("../utils/loger").loger();
function detail(req, res, next){
    let aaa=23;
    loger.info("detail-----",req.session);
    let user=req.session.user||"no user";
    user+=Math.random(100).toFixed(2);
    res.send({"user":user});
}
function add(req, res, next){
    let aaa=23;
    loger.info("add-----",req.session);
    req.session.user=req.query.uname||"00";
    res.send({"hhhhhh":"hjgjhgdfgh枯干古jhg"});
}
module.exports={
    detail:detail,
    add:add
}