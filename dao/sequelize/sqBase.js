const Sequelize = require('sequelize');
const sequelize = new Sequelize('lecanyu', 'root', 'zxy1111', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }, define: {
    timestamps: false
}
});


const Users = sequelize.define("users", {
    Id:{type:Sequelize.INTEGER,field:"id"},
  Name:{type:Sequelize.STRING,field:"name"} ,
  Address:{type:Sequelize.STRING,field:"address"},
  Email: {type:Sequelize.STRING,field:"email"},
  Age:{type:Sequelize.INTEGER,field:"age"} 
},{
  timestamps: false
});


// let user={
//     Name:"ZXYY",
//     Address:"Beijing",
//     Email:"ddd@123.com",
//     Age:11
// }

module.exports={
  Users:Users,
  sequelize:sequelize
}