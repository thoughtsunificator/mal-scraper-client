export default function(sequelize, DataTypes) {
	return sequelize.define('anime', {
		id_anime: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.STRING(105),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		synopsis: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		start_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		end_date: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		duration: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		cover: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		status: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		episodes: {
			type: DataTypes.STRING(55),
			allowNull: true
		},
		trailer: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		source: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		premiered: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'anime'
	});
};
