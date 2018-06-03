/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('t_test', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		aaa: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		bbb: {
			type: DataTypes.INTEGER(6),
			allowNull: true
		},
		ccc: {
			type: DataTypes.INTEGER(9),
			allowNull: true
		},
		ddd: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		eee: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		fff: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		ggg: {
			type: "DOUBLE",
			allowNull: true
		},
		hhh: {
			type: "DOUBLE",
			allowNull: true
		},
		iii: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		jjj: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		kkk: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		lll: {
			type: DataTypes.CHAR(255),
			allowNull: true
		},
		mmm: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		nnn: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		ooo: {
			type: DataTypes.TIME,
			allowNull: true
		},
		ppp: {
			type: DataTypes.DATE,
			allowNull: true
		},
		qqq: {
			type: DataTypes.DATE,
			allowNull: true
		},
		rrr: {
			type: "TINYBLOB",
			allowNull: true
		},
		sss: {
			type: "BLOB",
			allowNull: true
		},
		ttt: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		uuu: {
			type: DataTypes.ENUM(''),
			allowNull: true
		},
		vvv: {
			type: "BINARY(255)",
			allowNull: true
		},
		www: {
			type: "MULTIPOLYGON",
			allowNull: true
		}
	}, {
		tableName: 't_test',
		timestamps: false
	});
};
