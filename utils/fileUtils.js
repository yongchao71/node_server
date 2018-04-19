/*
 * @Author: ZXY 
 * @Date: 2018-03-20 21:33:35    
 * @Last Modified time: 2018-03-20 21:33:35 
 */

var fs=require('fs');
/**
 * 文件读取 同步
 * @param {文件路径} path 
 * @param {是否是json} isJson 
 */
function readFile(path,isJson) {
    let result="";    
    if(!fs.existsSync(path)){
        return result;
    }
    result=fs.readFileSync(path);
    if(isJson){
        return JSON.parse(result);
    }
    return result;
}
/**
 * 文件写入同步
 * @param {文件路径} path 
 * @param {写入的数据} jsonstr 
 */
function writeFile(path,data) {
//    if (fs.existsSync(path)) {
        fs.writeFileSync(path,data);
    // } else {
    //     console.log(path+ " Not Found!");
    // }
}
module.exports = {
    readFile:readFile,
    writeFile:writeFile
};