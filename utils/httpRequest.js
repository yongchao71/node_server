/*
 * @Author: ZXY 
 * @Date: 2018-03-21 09:14:53 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-04-15 01:35:24
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
/**
 * 解析传入参数
 * @param {传入参数} aArguments 
 */
function resolveParams(aArguments=[]){
    let oParams={};
    let iLength=aArguments.length;
    let iType=typeof(aArguments[0]);
        iType=="object"?oParams=aArguments[0]:oParams.url=aArguments[0];
        if (iLength== 2) {
        let iTypeT=typeof(aArguments[1]);
            iTypeT=="object"?oParams.body = aArguments[1]:oParams.method = aArguments[1];
        } else if (iLength== 3) {
            oParams.method = aArguments[1];
            oParams.body = aArguments[2];
        };
        // if((!oParams.method||oParams.method.toLocaleLowerCase()=="get")&&oParams.body){
        //     console.log(url.parse(oParams.url),typeof(url.parse(oParams.url).query));
        //     let gquery=url.parse(oParams.url).query||"";
        //     let oQuery=JSON.parse(JSON.stringify(querystring.parse(gquery)));
        //     let oBody=oParams.body;
        //     console.log("oQuery------------------>",oQuery,oBody.hasOwnProperty);
        //     cUtils.extend(oBody,oQuery);      
        // }
        oParams.body=oParams.body||{};
        if((!oParams.method||oParams.method.toLocaleLowerCase()=="get")){
            let matchResult=oParams.url.match(/(\S+?)\?([\S\s]*)/);
            let oQuery=matchResult&&matchResult[2]?JSON.parse(JSON.stringify(querystring.parse(matchResult[2]))):{};
            cUtils.extend(oParams.body,oQuery); 
            let params=querystring.stringify(oParams.body);
            let gUrl= matchResult?matchResult[1]:oParams.url
            oParams.url=encodeURI(`${gUrl}?${params}`); 
        }
        oParams.body=JSON.stringify(oParams.body);         
        return oParams;
};
module.exports={
    Get:Get,
    Post:Post,
    Request:Request
}