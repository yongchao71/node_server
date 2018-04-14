/*
 * @Author: ZXY 
 * @Date: 2018-04-14 14:04:43 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-04-14 17:20:04
 */
const bootConfig=require('./bootConfig.json'); //
const bootenv=bootConfig.bootenv||bootConfig.defaultenv; //bootenv
let remoteHost={
        dev:"https://sit-api.nihaomc.com",
        sit:"https://sit-api.nihaomc.com",
        uat:"https://uat-api.nihaomc.com",
        prod:"https://prod-api.nihaomc.com"
    }
var config={
    product: {
      list:`${remoteHost[bootenv]}/api/product/list`
    }
}
module.exports=config;