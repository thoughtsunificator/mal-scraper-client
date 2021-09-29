module.exports = function(sequelize, DataTypes) {
	return sequelize.define('producer', {
		id_producer: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nom: {
			type: DataTypes.STRING(255),
			allowNull: false
		}
	}, {
		tableName: 'producer'
	});
};
