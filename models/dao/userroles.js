module.exports = (sequelize, DataTypes)=> {
    let UserRoles=sequelize.define("UserRoles", {
        Id:{type:DataTypes.INTEGER,field:"id",primaryKey:true,autoIncrement: true},
       UserId:{type:DataTypes.STRING,field:"user_id"} ,
       RoleId:{type:DataTypes.STRING,field:"role_id"} ,
    },{
      timestamps: false,
      freezeTableName: true,
      tableName: 'userroles'
    })
    return UserRoles;
}