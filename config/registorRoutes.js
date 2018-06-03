/*
 * @Author: ZXY 
 * @Date: 2018-03-28 22:25:42 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-03 18:57:41
 */
var path = require("path");
var fs = require('fs');
const dcontrollers = path.resolve(__dirname, '../controllers');
function registorRoutes(app) {
    fs.existsSync(dcontrollers) && fs.readdirSync(dcontrollers).map(item => {
        let oItem = path.parse(item);
        if (oItem.ext == ".js") {
            let rootName = oItem.name.replace(/controller/i, "").toLocaleLowerCase();
            let root = `/${rootName}`;
            let jsPath = path.join(dcontrollers, item);
            app.use(root, require(jsPath));
        }
    });
}
module.exports = registorRoutes;