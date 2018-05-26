/*
 * @Author: ZXY 
 * @Date: 2018-03-28 22:25:42 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-05-26 18:00:26
 */
function registorRoutes(app) {
    var requires = [
        {
            root:"/",
            require: '../routes/index'
        },{
            root:"/users",
            require: '../routes/users'
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