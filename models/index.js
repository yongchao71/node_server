var sequelize = require('../dao/sequelize/sqBase').sequelize;
var path = require("path");
var fs = require('fs');
var loger = require("../utils/loger").loger();
let daopath = path.join(__dirname, 'dao');

let oModels ={};
fs.existsSync(daopath) && fs.readdirSync(daopath).map(item => {
    let oItem = path.parse(item);
    if (oItem.ext == ".js") {
        let jsPath=path.join(daopath,item);
        let sName = oItem.name.replace(/[a-z]/, char => char.toUpperCase());
        oModels[sName]=sequelize.import(jsPath);
    }
});
loger.info("index----------",oModels);
module.exports=oModels;
