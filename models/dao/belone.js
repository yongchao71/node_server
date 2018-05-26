module.exports = (sequelize, DataTypes)=> {
    let Belone=sequelize.define("Belone", {
        Id:{type:DataTypes.INTEGER,field:"id",primaryKey:true,autoIncrement: true},
      Belone:{type:DataTypes.STRING,field:"belone"} ,
      UserId:{type:DataTypes.INTEGER,field:"user_id"} ,
    },{
      timestamps: false,
      freezeTableName: true,
      tableName: 'belone'
    })
    return Belone;
}