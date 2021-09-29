module.exports = function(sequelize, DataTypes) {
	return sequelize.define('anime_meta', {
		id_meta: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_anime: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(105),
			allowNull: false
		},
		value: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'anime_meta'
	});
};
