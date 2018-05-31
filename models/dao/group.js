module.exports = (sequelize, DataTypes)=> {
    let Group=sequelize.define("Group", {
        Id:{type:DataTypes.UUID,field:"id",primaryKey:true},
      Name:{type:DataTypes.STRING,field:"name"},
      ParentId: {type:DataTypes.STRING,field:"parent_id"},
      CreateTime:{type:DataTypes.DATE,field:"createTime"}, 
      Describle:{type:DataTypes.INTEGER,field:"describle"}
    },{
      timestamps: false,
      freezeTableName: true,
      tableName: 'group'
    })
    return Group;
}