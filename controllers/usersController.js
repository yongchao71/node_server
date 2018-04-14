/*
 * @Author: ZXY 
 * @Date: 2018-03-20 13:41:18 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-04-15 01:32:37
 */
var CONFIGAPI=require("./../config/remoteAPI");
var httpRequest=require("./../utils/httpRequest");
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
    loger.info(req.body);
    req.session.user=req.query.uname||"00";
    res.send({"hhhhhh":"hjgjhgdfgh枯干古jhg"});
}
function test(req,res,next){

    let getUrl=`${CONFIGAPI.product.list}?unionid=oDOgS0kCV5its31fROZtbdqcpMAE&test=測試`;

    let pdata={unionid:"oDOgS0kCV5its31fROZtbdqcpMAE",test:"測試"};
    let getUrl2=CONFIGAPI.product.list;
    let postUrl=`${CONFIGAPI.users.add}?unionid=oDOgS0kCV5its31fROZtbdqcpMAE&test=測試`;
    let oParams={
        url:getUrl,
        url:postUrl,
        method:"POST",
        body:{
            unionid:"oDOgS0kCV5its31fROZtbdqcpMAE",
            AAA:"sdfgsdfg"
        }
    };
    // httpRequest.Request(oParams).then(result=>{
    //     console.log("result-------------",typeof(result),Array.isArray(result),result.length);
    //     console.log("result-------------",result[1]);
    //     res.send(result[1]);
    // });
    httpRequest.Request(postUrl,"post",pdata).then(result=>{
        console.log("result-------------",typeof(result),Array.isArray(result),result.length);
        console.log("result-------------",result[1]);
        res.send(result[1]);
    });
    //res.send("this is test data..");
}
module.exports={
    detail:detail,
    add:add,
    test:test
}