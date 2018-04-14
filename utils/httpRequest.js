/*
 * @Author: ZXY 
 * @Date: 2018-03-21 09:14:53 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-04-14 19:58:10
 */

var Q = require("q");
var url=require("url");
var querystring=require("querystring");
var request = require("request");
var loger=require("./loger").loger();
var cUtils=require("./comUtils");
var CONSTANT=require("../config/constant");

function Get(oParams={}){
    var deferred = Q.defer();
    
    let options={
        //url:oParams.url,
        method:"GET", 
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

function Post(oParams={}){
    var deferred = Q.defer();
    let options={
        //url:oParams.url,
        formData:{},
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
function Request(){
    let aParams=Array.prototype.slice.call(arguments);
    let oParams=resolveParams(aParams);
    var deferred = Q.defer();
    let options={
        //url:oParams.url,
        method:"GET", 
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
       //body:JSON.stringify(arg.data)
    };
    cUtils.extend(options,oParams);
    loger.info(JSON.stringify(options));
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
function resolveParams(aArguments=[]){
    let oParams={};
    let iLength=aArguments.length;
    if(iLength<=0){
        return oParams;
    }
    let iType=typeof(aArguments[0]);
    if (iLength==1){
        if(iType=="object"){
           oParams= aArguments[0]; //一个对象，可以包含url,请求方式method,headers,数据 body
        }else{
           oParams.url = aArguments[0];
        }    
    } else if (iLength== 2) {
        oParams.url = aArguments[0];
        iType=typeof(aArguments[1]);
        if(iType=="object"){
            oParams.body = aArguments[1] || {};
        }else{
            oParams.method = aArguments[1];  
        }
      } else if (iLength== 3) {
        oParams.url = aArguments[0];
        oParams.method = aArguments[1];
        oParams.body = aArguments[2] || {};
      };
      if(oParams.body){
          oParams.body=JSON.stringify(oParams.body);
      }
      let oUrl=url.parse(oParams.url);
      console.log(oUrl);
      console.log(querystring.parse(oUrl.query))
      return oParams;
};
module.exports={
    Get:Get,
    Post:Post,
    Request:Request
}