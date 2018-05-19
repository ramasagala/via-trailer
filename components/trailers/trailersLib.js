const R = require("ramda");
const fetch = require("node-fetch");

const config = {
    viaplay_imdb_path: ["_embedded", "viaplay:blocks", 0, "_embedded", "viaplay:product", "content", "imdb"],
    tmdb: {
        url: "https://api.themoviedb.org/3",
        api_key: "e635eac4c86fd6c9734b0b70fbabcdb1"
    }
};

const getTrailerUrl = async (viaplay_url) => {
    try {
        const tmdb_id = await getTmdbId(viaplay_url);
        const response = await fetch(config.tmdb.url + "/movie/" + tmdb_id + "/videos?api_key=" + config.tmdb.api_key);
        const json = await response.json();

        console.log(json);

        const youtubeify = json.results.map(x => "https://www.youtube.com/watch?v=" + x.key);
        return youtubeify;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};

const getTmdbId = async (viaplay_url) => {
    try {
        const imdb_id = await getImdbId(viaplay_url);
        const response = await fetch(config.tmdb.url + "/find/" + imdb_id + "?external_source=imdb_id&api_key=" + config.tmdb.api_key);
        const json = await response.json();
        const movie = R.path(["movie_results", 0], json)

        console.log(movie);

        return movie.id;

    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getImdbId = async (viaplay_url) => {
    try {
        const response = await fetch(viaplay_url);
        const json = await response.json();
        const imdb = R.path(config.viaplay_imdb_path, json)

        console.log(imdb);

        return imdb.id;

    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {"getTrailerUrl": getTrailerUrl};