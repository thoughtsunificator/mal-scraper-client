import fs from "fs"
import path from "path"
import camelCase from "camelcase"
import DataType from "sequelize/lib/data-types"

import database from "../config/database.js"

const models = {}

const modelFiles = fs.readdirSync("./model").filter(file => file !== "index.js")

for(const file of modelFiles) {
	let name = camelCase(path.basename(file, ".js"))
	name = name.charAt(0).toUpperCase() + name.slice(1)
	models[name] = (await import("./" + file)).default(database, DataType)
}

export default models
