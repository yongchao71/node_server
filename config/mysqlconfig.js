/*
 * @Author: ZXY 
 * @Date: 2018-04-19 16:22:57 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-04-19 16:52:54
 */
const bootConfig=require('./bootConfig.json'); //
const bootenv=bootConfig.bootenv||bootConfig.defaultenv; //bootenv
let sqlHost={
        dev:{
          mserverOne:{
            host:'localhost',
            user: 'root',
            password:'zxy1111',
            port:'3306',
            database :'lecanyu'
          },
          mserverTwo:{}
        },
        sit:{
          mserverOne:{},
          mserverTwo:{}
        },
        uat:{
          mserverOne:{},
          mserverTwo:{}
        },
        prod:{
          mserverOne:{},
          mserverTwo:{}
        }
    }
let hostConfig={
    serverOne:sqlHost[bootenv].mserverOne,
    serverTwo:sqlHost[bootenv].mserverTwo
}
module.exports=hostConfig;