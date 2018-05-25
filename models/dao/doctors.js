module.exports = (sequelize, DataTypes)=> {
    let oDoctors=sequelize.define("o_doctors", {
        Id:{type:DataTypes.UUID,field:"id",primaryKey:true},
      Rhospitalid:{type:DataTypes.STRING,field:"r_hospitalid"} ,
      Name:{type:DataTypes.STRING,field:"name"},
      Title: {type:DataTypes.STRING,field:"title"},
      Status:{type:DataTypes.INTEGER,field:"status"},
      CreateTime:{type:DataTypes.DATE,field:"createTime"} 
    },{
      timestamps: false,
      freezeTableName: true
    })
    return oDoctors;
}