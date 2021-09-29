const fs = require('fs')
const Sequelize = require("sequelize")

let config = {
	"DATABASE_NAME": "mal-ripper",
	"DATABASE_USER": "root",
	"DATABASE_PASSWORD": null,
	"DATABASE_HOST": "localhost"
}

if(fs.existsSync("../.env.json")) {
	config = {
		...config,
		...require("../.env.json")
	}
}

module.exports = new Sequelize(config.DATABASE_NAME, config.DATABASE_USER, config.DATABASE_PASSWORD, {
	host: config.DATABASE_HOST,
	dialect: "mariadb",
	define: {
		timestamps: false
	}
})
