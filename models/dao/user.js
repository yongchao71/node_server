module.exports = (sequelize, DataTypes)=> {
    let User=sequelize.define("User", {
        Id:{type:DataTypes.INTEGER,field:"id",primaryKey:true,autoIncrement: true},
      LoginName:{type:DataTypes.STRING,field:"loginname"} ,
      Name:{type:DataTypes.STRING,field:"name"} ,
      Address:{type:DataTypes.STRING,field:"address"},
      Email: {type:DataTypes.STRING,field:"email"},
      CreateTime: {type:DataTypes.DATE,field:"createTime"},
      Age:{type:DataTypes.INTEGER,field:"age"} 
    },{
      timestamps: false,
      freezeTableName: true,
      tableName: 'user'
    })
    return User;
}