module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id_user: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_membre: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		username: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		access_level: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'users'
	});
};
