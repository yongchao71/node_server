/*
 * @Author: ZXY 
 * @Date: 2018-03-18 22:16:52 
 */
function registorRoutes(app) {
    var requires = [
        {
            root:"/",
            require: '../routes/index'
        },{
            root:"/users",
            require: '../routes/users'
        }
    ];

    requires.forEach(function(item, index) {
        app.use(item.root, require(item.require));
    });
}
module.exports = registorRoutes;