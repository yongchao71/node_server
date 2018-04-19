/*
 * @Author: ZXY 
 * @Date: 2018-04-14 14:04:43 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-04-15 12:29:06
 */
const bootConfig=require('./bootConfig.json'); //
const bootenv=bootConfig.bootenv||bootConfig.defaultenv; //bootenv
let remoteHost={
        dev:{
          mserver:"https://sit-api.lecanyu.com",
          local:`http://localhost:${bootConfig.serverport}`
        },
        sit:{
          mserver:"https://sit-api.lecanyu.com",
          local:`http://localhost:${bootConfig.serverport}`
        },
        uat:{
          mserver:"https://uat-api.lecanyu.com",
          local:`http://localhost:${bootConfig.serverport}`
        },
        prod:{
          mserver:"https://prod-api.lecanyu.com",
          local:`http://localhost:${bootConfig.serverport}`
        }
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