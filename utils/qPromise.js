/*
 * @Author: ZXY 
 * @Date: 2018-03-21 09:14:53 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-03-23 14:34:09
 */

var Q = require("q");
var request = require("request");
var loger=request("./loger.js");
var cUtils=require("./cUtils");
var CONSTANT=require("../config/constant");
const util = require("util");
function requestUrl(url) {
    return Q.Promise(function(resolve, reject, notify) {
        request(url, function (error, response, body) {
            if(error){
                reject(error);
            }else{
                if (!error && response.statusCode == 200) {
                    resolve(body);
                }
            }
        })
    });
}
function createPromise(url){
    var deferred = Q.defer();
    request(url , function(err , response , body){
        console.log("requested "+url);
        if(err){
            deferred.reject(err);
        }        
        else{
            deferred.resolve(body);
        }
    });
    return deferred.promise;
}
function qPromise(oParams={}){
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
            deferred.resolve(error);
        }
        else{
            deferred.resolve(body);
        }
    });
    return deferred.promise;

};

function wxPromise(fn) {
    return function (obj = {}) {
      return new Promise((resolve, reject) => {
        obj.success = function (res) {
          resolve(res);
        }
        obj.fail = function (res) {
          //reject(res);
          resolve(res);
        }
        fn(obj);
      })
    }
  };

module.exports={
    qPromise:qPromise
}