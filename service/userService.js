var loger = require("../utils/loger").loger();
var Models = require("../models/index");
var BaseService=require("./BaseService");
var CRESPONSE=require("../common/cresponse");
/**
 * 添加User
 */
function add(oUser) {
    let User=new BaseService("User");
    return User.create(oUser);
}
/**
 * 批量添加User
 */
function bulkadd(aUsers){
    let User=new BaseService("User");
    return User.bulkCreate(aUsers);
}
/**
 * 根据id删除
 * @param {删除id} uid 
 */
function removebyid(uid) {
    let User=new BaseService("User");
    return  User.destroy({where:{Id:uid}});
}
/**
 * 根据id更新单个对象
 * @param {更新对象} oUser 
 */
function updatebyid(oUser) {
    let User=new BaseService("User");
    return User.update(oUser, {where: {Id: oUser.Id}});
}
/**
 * 根据id查询单个条目
 * @param {查询id} uid 
 */
function findbyid(uid) {
    let User=new BaseService("User");
    return  User.findByPrimary(uid);
}
/**
 * 根据条件查询分页列表
 * @param {查询调教} options 
 * @param {分页编码} pageNo 
 * @param {每页条目} pageSize 
 */
function list(options, pageNo, pageSize) {
    let User=new BaseService("User");
    return  User.findAndCountAll(options,pageNo,pageSize);
}
/**
 * 根据条件查询所有列表
 * @param {查询条件} options 
 */
function listall(options) {
    let User=new BaseService("User");
    return  User.findAll(options);
}





module.exports = {
    add: add,
    bulkadd:bulkadd,
    removebyid: removebyid,
    updatebyid: updatebyid,
    findbyid: findbyid,
    list: list,
    listall:listall
}