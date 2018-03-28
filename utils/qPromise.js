/*
 * @Author: ZXY 
 * @Date: 2018-03-28 21:55:32 
 * @Last Modified by: 
 * @Last Modified time: 2018-03-28 22:05:56
 */

var Q = require('q');
/**
 * Q.将数据封装成promise对象
 * @param {任意参数} args 
 */
let Qobj=function(args){
    return Q(args);
};
/**
 * Q.fcall:将同步方法封装成promise
 * @param {同步方法} fn 
 */
let Qfcall=function(fn){
    return Q.fcall(fn);
};
/**
 * Q.nfcall:将异步方法封装成promise，例子：Q.nfcall(fs.readFile,filename,encoding)
 * @param {异步方法} fn 
 * @param {异步方法参数，不定长度} args 
 */
let Qnfcall=function(fn,...args){
    return Q.nfcall(fn,args);
}; 
/**
 *  Q.all:将一批promise封装成一个promise
 * @param {promise数组} aPromise 
 * 返回then(data) 执行数组
 */
let QAll=function(...aPromise){
    //let aPromise =Array.prototype.slice.call(arguments);
    return Q.all(aPromise);
}
module.exports={
    Qobj:Qobj,
    Qfcall:Qfcall,
    Qnfcall:Qnfcall,
    QAll:QAll
}