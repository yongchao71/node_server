/*
 * @Author: ZXY 
 * @Date: 2018-04-20 13:03:36 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-04-20 16:13:37
 */

var mysql= require('mysql');
var Q = require('q');
const log4js= require('../utils/loger');
const loger = log4js.loger("webrequest");
const errorlogger = log4js.loger('error');
let sqlConfig=require('../config/mysqlconfig');

var pool = mysql.createPool(sqlConfig.serverOne);

let fQuery_bak=function(query,params={}){
    let deferred = Q.defer();
    pool.getConnection(function(poolerr,conn){
        if(poolerr){
            errorlogger.error(poolerr);
            deferred.resolve(poolerr);
        }else{
            loger.info("----query------->",query);
            loger.info("----params------->",params);
            conn.query(query,params,function(queryError,rows,fields){
                if(queryError){
                    errorlogger.error(queryError);
                    deferred.resolve(queryError);
                }else{
                    let resultStr=JSON.stringify(rows); 
                    let rowdata = JSON.parse(resultStr);
                    deferred.resolve(rowdata);
                }
                conn.release();
            });
        }
    });
    return deferred.promise;
};
let fQuery=function(query,params={}){
    let deferred = Q.defer();
    pool.getConnection(function(poolerr,conn){
        if(poolerr){
            errorlogger.error(poolerr);
            deferred.resolve(poolerr);
        }else{
            let sql=mysql.format(query,params);
            loger.info("----query------->",query);
            loger.info("----params------->",params);
            loger.info("----sql------->",sql);
            conn.query(sql,function(queryError,rows,fields){
                if(queryError){
                    errorlogger.error(queryError);
                    deferred.resolve(queryError);
                }else{
                    let resultStr=JSON.stringify(rows); 
                    let rowdata = JSON.parse(resultStr);
                    let reg=/^\s*select/i;
                    let itest=reg.test(query);
                    if(itest){
                        deferred.resolve(rowdata);
                    }else{
                        deferred.resolve(rowdata.affectedRows);
                    }

                }
                conn.release();
            });
        }
    });
    return deferred.promise;
};
module.exports=fQuery;

//inster
return false;
let iparams=[["loginname","name","email","address","age"],["让退","dfg","434123@123.com","AAA",23]];
//let iquery="insert into users(??) values (?)";
let iquery="select  *  from users"
fQuery(iquery,iparams).then((result) => {
    console.log("stype--2222-----------");
    console.log("-----------",result);
    // result.forEach(element => {
    //     console.log(element);
    //     console.log(element.id);
    //     console.log("---=====================---");
    // });
});


let params=["name","email",{id:1}];
let query="select * from users";
query="SELECT ?,? FROM users WHERE ?";
return false;
fQuery(query,params).then((result) => {
    console.log("stype--2222-----------");
    console.log("-----------",result);
    // result.forEach(element => {
    //     console.log(element);
    //     console.log(element.id);
    //     console.log("---=====================---");
    // });
});
