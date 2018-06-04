const Sequelize = require('sequelize');
var loger=require('../../utils/loger').loger();
const sequelize = new Sequelize('lecanyu', 'root', 'zxy1111', {
  host: 'localhost',
  dialect: 'mysql',
  logging:function(sql){loger.info("==========>",sql)},
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }, define: {
    timestamps: false
}
});
sequelize.authenticate().then(() => {
    loger.info('Connection has been established successfully.');
  }).catch(err => {
    loger.error('Unable to connect to the database:', err);
  });

// const Users = sequelize.define("users", {
//     Id:{type:Sequelize.INTEGER,field:"id",primaryKey:true},
//   Name:{type:Sequelize.STRING,field:"name"} ,
//   Address:{type:Sequelize.STRING,field:"address"},
//   Email: {type:Sequelize.STRING,field:"email"},
//   Age:{type:Sequelize.INTEGER,field:"age"} 
// },{
//   timestamps: false
// });



// let user={
//     Name:"ZXYY",
//     Address:"Beijing",
//     Email:"ddd@123.com",
//     Age:11
// }

module.exports={
 // Users:Users,
  sequelize:sequelize,
  Sequelize:Sequelize
}