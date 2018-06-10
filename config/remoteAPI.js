/*
 * @Author: ZXY 
 * @Date: 2018-04-14 14:04:43 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-04 09:50:50
 */
const bootConfig=require('./bootConfig.json'); //
const bootenv=bootConfig.bootenv||bootConfig.defaultenv; //bootenv
let remoteHost={
        dev:{
          mserver:"https://api-dev.nihaomc.com",
          local:`http://localhost:${bootConfig.serverport}`
        },
        sit:{
          mserver:"https://api-dev.nihaomc.com",
          local:`http://localhost:${bootConfig.serverport}`
        },
        uat:{
          mserver:"https://api-dev.nihaomc.com",
          local:`http://localhost:${bootConfig.serverport}`
        },
        prod:{
          mserver:"https://api-dev.nihaomc.com",
          local:`http://localhost:${bootConfig.serverport}`
        }
    }
var config={
    product: {
      list:`${remoteHost[bootenv].mserver}/bms/api/product/list`
    },
    users:{
      add:`${remoteHost[bootenv].local}/users/add`
    }
}
module.exports=config;