module.exports = (sequelize, DataTypes)=> {
    let Users=sequelize.define("users", {
        Id:{type:DataTypes.INTEGER,field:"id",primaryKey:true,autoIncrement: true},
      Name:{type:DataTypes.STRING,field:"name"} ,
      Address:{type:DataTypes.STRING,field:"address"},
      Email: {type:DataTypes.STRING,field:"email"},
      Age:{type:DataTypes.INTEGER,field:"age"} 
    },{
      timestamps: false,
      freezeTableName: true
    })
    return Users;
}



