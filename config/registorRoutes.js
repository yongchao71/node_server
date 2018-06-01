/*
 * @Author: ZXY 
 * @Date: 2018-03-28 22:25:42 
 * @Last Modified by: ZXY
 * @Last Modified time: 2018-06-01 22:28:30
 */
function registorRoutes(app) {
    var requires = [
        {
            root:"/demo",
            require: '../controllers/demoController'
        },{
            root:"/user",
            require: '../controllers/userController'
        },{
            root:"/seque",
            require: '../controllers/sequeController'
        }
    ];

    requires.forEach(function(item, index) {
        app.use(item.root, require(item.require));
    });
}
module.exports = registorRoutes;