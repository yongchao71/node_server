/*
 * @Author: ZXY 
 * @Date: 2018-03-21 09:14:53 
 * @Last Modified by: 
 * @Last Modified time: 2018-03-28 22:37:23
 */

var Q = require("q");
var request = require("request");
var loger=request("./loger.js");
var cUtils=require("./comUtils");
var CONSTANT=require("../config/constant");


function httpRequest(oParams={}){
    var deferred = Q.defer();
    let options={
        //url:oParams.url,
        method:"POST", 
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
       //body:JSON.stringify(arg.data)
    };
    cUtils.extend(options,oParams);
    loger.info(options.url,options.body);
    request(options , function(error , response , body){
        if(error){
            deferred.resolve([response,CONSTANT.errorCode.requestError]);
        }
        else{
            deferred.resolve([response,body]);
        }
    });
    return deferred.promise;

};
module.exports={
    httpRequest:httpRequest
}