/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('o_users', {
		id: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: sequelize.fn('uuid'),
			primaryKey: true
		},
		wxa_openid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		wxa_unionid: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		wxa_avatarUrl: {
			type: DataTypes.STRING(300),
			allowNull: true
		},
		wxa_city: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		wxa_province: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		wxa_country: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		wxa_gender: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		wxa_nickName: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		wxa_language: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		phoneNum: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		sex: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
			defaultValue: '0'
		},
		birthday: {
			type: DataTypes.DATE,
			allowNull: true
		},
		signature: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		backField: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		createTime: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'o_users',
		timestamps: false
	});
};
