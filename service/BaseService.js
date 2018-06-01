/*
 * @Author: ZXY 
 * @Date: 2018-06-01 17:34:12 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-01 19:33:28
 */

var Models = require("../models/index");
//let Test=Models.sequelize.define("users");
function BaseService(tableName){
    this.tableName=tableName;
    this.Models=Models;
    
}
/**
 * 查询单个结果
 * @param {查询条件} oParams 
 */
BaseService.prototype.findOne=function(oParams={}){
    let tableName=this.tableName;
    return Models[tableName].findOne(oParams);
}
/**
 * 根据id查询单个值
 * @param {查询id} paramId 
 */
BaseService.prototype.findById=function(paramId){
    let tableName=this.tableName;
    return Models[tableName].findById(paramId);
}
/**
 * 根据主键查询单个
 * @param {主键} primaryKey 
 */
BaseService.prototype.findByPrimary=function(primaryKey){
    let tableName=this.tableName;
    return Models[tableName].findByPrimary(primaryKey);
}
/**
 * 查询所有结果
 * @param {查询对象条件} oParams 
 */
BaseService.prototype.findAll=function(oParams={}){
    let tableName=this.tableName;
    return Models[tableName].findAll(oParams);
}
/**
 * 查询并计数
 * @param {查询对象条件} oParams 
 */
BaseService.prototype.findAndCount=function(oParams={}){
    let tableName=this.tableName;
    return Models[tableName].findAndCount(oParams);
}
/**
 * 查询所有结果并计数
 * @param {查询条件} oParams 
 */
BaseService.prototype.findAndCountAll=function(oParams={}){
    let tableName=this.tableName;
    return Models[tableName].findAndCountAll(oParams);
}
/**
 * 创建一条记录
 * @param {创建对象} oParams 
 */
BaseService.prototype.create=function(oParams={}){
    let tableName=this.tableName;
    return Models[tableName].create(oParams);
}
/**
 * 批量创建
 * @param {创建数组参数} oParams 
 */
BaseService.prototype.bulkCreate=function(oParams=[]){
    let tableName=this.tableName;
    return Models[tableName].bulkCreate(oParams);
}
/**
 * 根据条件进行删除
 * @param {删除条件} oParams 
 */
BaseService.prototype.destroy=function(oParams={}){
    let tableName=this.tableName;
    return Models[tableName].destroy(oParams);
}
/**
 * 根据条件更新数据
 * @param {更新的结果} updateData 
 * @param {更新的条件} options 
 */
BaseService.prototype.update=function(updateData={},options={}){
    let tableName=this.tableName;
    return Models[tableName].update(updateData,options);
}
/**
 * 根据条件统计总数
 * @param {统计查询调剂那} options 
 */
BaseService.prototype.count=function(options={}){
    let tableName=this.tableName;
    return Models[tableName].count(options);
}
/**
 * 计算某列总和
 * @param {要查询的字段} filed 
 * @param {查询条件} options 
 */
BaseService.prototype.sum=function(filed,options={}){
    let tableName=this.tableName;
    return Models[tableName].sum(filed,options);
}
/**
 * 查询某列最小值
 * @param {要查询的字段} filed 
 * @param {查询条件} options 
 */
BaseService.prototype.min=function(filed,options={}){
    let tableName=this.tableName;
    return Models[tableName].min(filed,options);
}
/**
 * 查询某列最大值
 * @param {要查询的字段} filed 
 * @param {查询条件} options 
 */
BaseService.prototype.max=function(filed,options={}){
    let tableName=this.tableName;
    return Models[tableName].max(filed,options);
}
module.exports=BaseService;































