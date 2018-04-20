/*
 * @Author: ZXY 
 * @Date: 2018-04-20 13:03:20 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-04-20 16:12:21
 */

var fQuery=require("./mysqlbase");
/**
 * 添加对象
 * @param {表名字} table 
 * @param {数据对象} oData  {}
 * @param {过滤字段} limitFields  数组[] 过滤插入指定字段 
 */
function add_item(table,oData,limitFields){ 
    let fields=[];
    let values=[];
    let oItem=Object.keys(oData);
    limitFields=limitFields||oItem;
    oItem.forEach(function(key){ 
        if(limitFields.indexOf(key)>=0){
            fields.push(key);
            values.push(oData[key]);
        }
   });
    let params=[fields,values];
    let query=`insert into  ${table}(??) values (?)`
    return fQuery(query,params);

}
/**
 * 删除指定元素
 * @param {表名} table 
 * @param {参数} oParams 对象或者字符串 
 */
function del_item(table,oParams){
    let query=`delete from ${table} where `;
    let params=[];
    if(typeof(oParams)=="string"){
        query=`${query} ${oParams}`;
    }else{
        let oItem=Object.keys(oParams);
        let iLength=oItem.length-1;
         oItem.forEach(function(key,index){ 
             params.push(oParams[key]);
             if(index!=iLength){
                 query+=`${key}=? and `;
             }else{
                 query+=`${key}=? `;
             }
        });
    }
    return fQuery(query,params);
}
/**
 * 更新数据   update_items("users",{name:"sdfg"},{id:12})
 * update_items("users",{name:"sdfg"},"id>12")
 * @param {表名} table  
 * @param {要设置的值} oSet 
 * @param {条件} oWhere 
 */
function update_items(table,oSet,oWhere){
    let query=`update ${table} set ?  where `;
    let params=[oSet];
    if(typeof(oWhere)=="string"){
        query=`${query}   ${oWhere}`;
    }else{
        let oItem=Object.keys(oWhere);
        let iLength=oItem.length-1;
         oItem.forEach(function(key,index){ 
             params.push(oWhere[key]);
             if(index!=iLength){
                 query+=`${key}=? and `;
             }else{
                 query+=`${key}=? `;
             }
        });
    }
    return fQuery(query,params);
}
/**
 * 查询单条记录
 * @param {*} table 
 * @param {*} fields 
 * @param {*} oWhere 
 * @param {*} orderbyOrlimit 
 */
function select_one(table,fields,oWhere,orderbyOrlimit){
  return select_items(table,fields,oWhere,orderbyOrlimit).then(result=>{
      if(result.length>0){
          return result[0];
      }else{
          return {};
      }
  });
}
/**
 * 查询，返回数据集合 select_items("users",["id","name","age","email"],{name:"ZXY",age:44},"order by id desc");
 * select_items("users",["id","name","age","email"],"","where id>0 order by id desc");
 * @param {表名} table 
 * @param {字段} fields 
 * @param {查询条件} swhere  where只能是相等
 * @param {排序} orderbyOrlimit  
 */
function select_items(table,fields,oWhere,orderbyOrlimit){
      let params=[];
      fields=fields|| ["*"];
      params.push(fields)
      let query=`select ?? from  ${table}`
      if(oWhere){ 
        query=`${query} where `
        let oItem=Object.keys(oWhere);
        let iLength=oItem.length-1;
        oItem.forEach(function(key,index){ 
            params.push(oWhere[key]);
            if(index!=iLength){
                query+=`${key}=? and `;
            }else{
                query+=`${key}=? `;
            }
       });
      }
      if(orderbyOrlimit){
        query=`${query} ${orderbyOrlimit} `;
      }
    return fQuery(query,params);
}
/**
 * 数据库操作，CRUD
 * @param {查询字符串} query 
 * @param {参数} params 
 */
function squery(query,params){
    return fQuery(query,params);
}

