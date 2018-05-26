var SequelizeAuto = require('sequelize-auto');
var path=require('path');
let daopath = path.join(__dirname, 'dao');
var auto = new SequelizeAuto(
    'lecanyu', 'root', 'zxy1111', {
        host: 'localhost',
        dialect: 'mysql',
        directory: daopath, // prevents the program from writing to disk
        port: '3306',
        noWrite:true,
        camel:true,
        additional: {
            timestamps: false
            //...
        },
        tables: ['o_users']
    }
)
// auto.run(function (err) {
//     if (err) throw err;

//     console.log(auto.tables); // table list
//     console.log(auto.foreignKeys); // foreign key list
// });