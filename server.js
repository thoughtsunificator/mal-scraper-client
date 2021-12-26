const path = require('path')
const malScraper = require('mal-scraper')

const animeOfflineDatabase = require("./lib/anime-offline-database-minified.json")
const models = require("./model/index.js")

const animes = animeOfflineDatabase.data.filter(anime => anime.sources.filter(source => source.startsWith("https://myanimelist.net").length >= 1).sort(() => Math.random() - 0.5));

(async function() {
	const count = await models.Anime.count()
	for(const anime of animes.slice(count)) {
		let sources = anime.sources.filter(source => source.startsWith("https://myanimelist.net"))
		if(sources.length === 0) {
			continue;
		}
		console.log("requesting", sources[0])
		const info = await malScraper.getInfoFromURL(sources[0])
		let start_date = null
		let end_date = null
		if(info.aired.includes("to") === true) {
			if (isNaN(Date.parse(info.aired.split("to")[0])) === false) {
				start_date = new Date(info.aired.split("to")[0])
			}
			if (isNaN(Date.parse(info.aired.split("to")[1])) === false) {
				end_date = new Date(info.aired.split("to")[1])
			}
		} else if (isNaN(Date.parse(info.aired)) === false) {
			start_date = info.aired
		}
		const animeModel = await models.Anime.create({
			type: info.type,
			title: info.title,
			synopsis: info.synopsis,
			start_date,
			end_date,
			status: info.status,
			episodes: info.episodes,
			trailer: info.trailer,
			source: info.source,
			premiered: info.premiered,
			duration: info.duration,
			cover: info.picture
		})
		for(const genre of info.genres) {
			if(genre === "No genres have been added yet." || genre.trim() === "") {
				continue;
			}
			await models.AnimeMeta.create({
				name: "genre",
				value: genre,
				id_anime: animeModel.id_anime,
			})
		}
		for(const producer of info.producers) {
			if(producer === "None found, add some" || producer.trim() === "") {
				continue;
			}
			await models.AnimeMeta.create({
				name: "producer",
				value: producer,
				id_anime: animeModel.id_anime,
			})
		}
		for(const studio of info.studios) {
			if(studio === "None found, add some" || studio.trim() === "") {
				continue;
			}
			await models.AnimeMeta.create({
				name: "studio",
				value: studio,
				id_anime: animeModel.id_anime,
			})
		}
		for(const synonym of info.synonyms) {
			if(synonym.trim() === "") {
				continue;
			}
			await models.AnimeMeta.create({
				name: "synonym",
				value: synonym,
				id_anime: animeModel.id_anime,
			})
		}
	}
})()
