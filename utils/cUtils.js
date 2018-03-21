/*
 * @Author: ZXY 
 * @Date: 2018-03-21 12:16:25 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-03-21 16:07:14
 */
/**
 * 对象深拷贝
 * @param {源对象} oSource 
 * @param {目的对象} oDestination 
 */
var deepCopy= function(oSource,oDestination){
    let oResult=Array.isArray(oSource)?[]:{};
    oResult=oDestination||oResult;
    if(!oSource||typeof(oSource)!='object'){   
        return oSource;
    } 
    for (let key in oSource) {
        if (!oSource.hasOwnProperty(key)) {
           continue;
        }
        let iValue=oSource[key];
        if(iValue&&typeof(iValue)=="object"){
            oResult[key]=deepCopy(iValue,oResult[key]);
        }else{
            oResult[key]=iValue;
        }
    }
    return oResult;
};
/**
 * 深继承
 * @param {目的对象} oDestination 
 * @param {源对象} oSource 
 */
var extend=function(oDestination,oSource){
   deepCopy(oSource,oDestination); 
};
module.exports={
    deepCopy:deepCopy,
    extend:extend
}
