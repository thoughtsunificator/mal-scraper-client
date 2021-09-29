const fs = require("fs")
const path = require("path")
const camelCase = require("camelcase")
const DataType = require("sequelize/lib/data-types")

const database = require("../config/database.js")

const models = {}

fs.readdirSync("./model").filter(file => file !== "index.js").forEach(file => {
	let name = camelCase(path.basename(file, ".js"))
	name = name.charAt(0).toUpperCase() + name.slice(1)
	models[name] = require("./" + file)(database, DataType)
})

module.exports = models
