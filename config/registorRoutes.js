/*
 * @Author: ZXY 
 * @Date: 2018-03-28 22:25:42 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-01 15:58:39
 */
function registorRoutes(app) {
    var requires = [
        {
            root:"/",
            require: '../routes/index'
        },{
            root:"/user",
            require: '../routes/user'
        },{
            root:"/seque",
            require: '../routes/seque'
        }
    ];

    requires.forEach(function(item, index) {
        app.use(item.root, require(item.require));
    });
}
module.exports = registorRoutes;