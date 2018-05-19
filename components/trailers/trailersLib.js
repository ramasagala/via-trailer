const R = require("ramda");
const fetch = require("node-fetch");

class trailesLib{
    constructor(config){
        this.config = config;
    }

    /**
     * Get Movie Trailer URL
     * @async
     * @method getTrailerUrl 
     * @param {String} viaplay_url 
     *      viaplay resource URL of the movie
     * @returns {Array}
     *      list of trailer video url
     */
    async getTrailerUrl(viaplay_url){
        try {
            const tmdb_id = await this.getTmdbId(viaplay_url);
            const response = await fetch(this.config.tmdb.url + "/movie/" + tmdb_id + "/videos?api_key=" + this.config.tmdb.api_key);
            const json = await response.json();
    
            const youtubeify = json.results.map(x => "https://www.youtube.com/watch?v=" + x.key);
            return youtubeify;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };

    /**
     * Get TMDB ID from TheMovieDB
     * @async
     * @method getTmdbId 
     * @param {String} viaplay_url 
     *      viaplay resource URL of the movie
     * @returns {String}
     *      TMDB ID
     */
    async getTmdbId(viaplay_url){
        try {
            const imdb_id = await this.getImdbId(viaplay_url);
            const response = await fetch(this.config.tmdb.url + "/find/" + imdb_id + "?external_source=imdb_id&api_key=" + this.config.tmdb.api_key);
            const json = await response.json();
            
            const movie = R.path(["movie_results", 0], json)    
            return movie.id.toString();
    
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    /**
     * Get IMDB ID from viaplay resource url
     * @async
     * @method getImdbId 
     * @param {String} viaplay_url 
     *      viaplay resource URL of the movie
     * @returns {String}
     *      IMDB ID
     */
    async getImdbId(viaplay_url){
        try {
            const response = await fetch(viaplay_url);
            const json = await response.json();
            
            const imdb = R.path(this.config.viaplay_imdb_path, json)   
            return imdb.id;
    
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};

module.exports = trailesLib;