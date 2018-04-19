var mysql      = require('mysql');
var Q = require('q');
let sqlConfig=require('../config/mysqlconfig');

var pool = mysql.createPool(sqlConfig.serverOne);

let fQuery=function(query,params={}){
    let deferred = Q.defer();
    pool.getConnection(function(poolerr,conn){
        if(poolerr){
            deferred.resolve(poolerr);
        }else{
            conn.query(query,params,function(queryError,rows,fields){
                if(queryError){
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




let connection = mysql.createConnection(sqlConfig.serverOne);
function selectdata(query,params={}){
    let deferred = Q.defer();
    //connection.connect();
    connection.query(query,params,function(err, rows, fields) {
        //console.log("fields-----------------------",fields);
        if (err) {
            deferred.resolve(err);
        }else{
            let resultStr=JSON.stringify(rows); 
            let rowdata = JSON.parse(resultStr);
            deferred.resolve(rowdata);
        }
        connection.end(function(err){
        });
    });
    return deferred.promise;
}
let params=["name","email",{id:5}];
let query="select * from users";
query="SELECT ?,? FROM users WHERE ?";

selectdata(query,params).then((result) => {
    console.log("stype--2222-----------");
    console.log("-----------",result);
    // result.forEach(element => {
    //     console.log(element);
    //     console.log(element.id);
    //     console.log("---=====================---");
    // });
});
selectdata(query,params).then((result) => {
    console.log("stype--2222-----------");
    console.log("-----------",result);
    // result.forEach(element => {
    //     console.log(element);
    //     console.log(element.id);
    //     console.log("---=====================---");
    // });
});