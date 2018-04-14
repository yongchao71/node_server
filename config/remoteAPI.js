/*
 * @Author: ZXY 
 * @Date: 2018-04-14 14:04:43 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-04-14 23:12:14
 */
const bootConfig=require('./bootConfig.json'); //
const bootenv=bootConfig.bootenv||bootConfig.defaultenv; //bootenv
let remoteHost={
        dev:{
          mserver:"https://sit-api.nihaomc.com",
          local:`http://localhost:${bootConfig.serverport}`
        },
        sit:"https://sit-api.nihaomc.com",
        uat:"https://uat-api.nihaomc.com",
        prod:"https://prod-api.nihaomc.com"
    }
var config={
    product: {
      list:`${remoteHost[bootenv].mserver}/api/product/list`
    },
    users:{
      add:`${remoteHost[bootenv].local}/users/add`
    }
}
module.exports=config;