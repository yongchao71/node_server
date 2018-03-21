/*
 * @Author: ZXY 
 * @Date: 2018-03-21 09:14:53 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-03-21 11:15:00
 */

var Q = require('q');
var request = require('request');
const util = require('util');
function requestUrl(url) {
    return Q.Promise(function(resolve, reject, notify) {
        request(url, function (error, response, body) {
            if(error)
                reject(error);
            if (!error && response.statusCode == 200) {
                resolve(body);
            }
        })
    });
}
function createPromise(url){
    var deferred = Q.defer();
    request(url , function(err , response , body){
        console.log("requested "+url);
        if(err)
            deferred.reject(err);
        else
            deferred.resolve(body);
    });
    return deferred.promise;
}
function qPromise(){
    var deferred = Q.defer();
};
module.exports={
    qPromise:qPromise
}