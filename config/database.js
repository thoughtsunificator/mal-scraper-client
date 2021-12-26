const path = require('path')
const fs = require('fs')
const Sequelize = require("sequelize")

let config = {
	"DATABASE_NAME": "mal_scrapper",
	"DATABASE_USER": "mal-scrapper",
	"DATABASE_PASSWORD": "mal-scrapper",
	"DATABASE_HOST": "localhost"
}

const keys = Object.keys(config)
if(fs.existsSync(path.resolve(__dirname, "..", ".env.json"))) {
	config = {
		...config,
		...require(path.resolve(__dirname, "..", ".env.json"))
	}
}
Object.keys(process.env).filter(key => keys.includes(key)).forEach(key => {
	config[key] = process.env[key]
})

module.exports = new Sequelize(config.DATABASE_NAME, config.DATABASE_USER, config.DATABASE_PASSWORD, {
	host: config.DATABASE_HOST,
	dialect: "mariadb",
	define: {
		timestamps: false
	}
})
