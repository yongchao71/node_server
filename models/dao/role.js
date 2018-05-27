module.exports = (sequelize, DataTypes)=> {
    let Role=sequelize.define("Role", {
        Id:{type:DataTypes.INTEGER,field:"id",primaryKey:true,autoIncrement: true},
       Name:{type:DataTypes.STRING,field:"name"} ,
    },{
      timestamps: false,
      freezeTableName: true,
      tableName: 'role'
    })
    return Role;
}