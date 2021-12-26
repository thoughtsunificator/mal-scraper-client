import path from 'path'
import fs from 'fs'
import Sequelize from "sequelize"

let config = {
	"DATABASE_NAME": "mal_scrapper",
	"DATABASE_USER": "mal-scrapper",
	"DATABASE_PASSWORD": "mal-scrapper",
	"DATABASE_HOST": "localhost"
}

const keys = Object.keys(config)
if(fs.existsSync(".env.json")) {
	config = {
		...config,
		...JSON.parse(fs.readFileSync(".env.json"))
	}
}
Object.keys(process.env).filter(key => keys.includes(key)).forEach(key => {
	config[key] = process.env[key]
})

export default new Sequelize(config.DATABASE_NAME, config.DATABASE_USER, config.DATABASE_PASSWORD, {
	host: config.DATABASE_HOST,
	dialect: "mariadb",
	define: {
		timestamps: false
	}
})
