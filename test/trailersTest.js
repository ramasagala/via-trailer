const trailersLib = require("../components/trailers/trailersLib");
const config = require("../config");
const chai = require("chai");

const expect = chai.expect;
const lib = new trailersLib(config);

// TEST DATA
const viaplay_url_1 = "https://content.viaplay.se/pc-se/film/arrival-2016";
const imdb_id_1 = "tt2543164";
const tmdb_id_1 = "329865";
const trailer_url_1 = "https://www.youtube.com/watch?v=gwqSi_ToNPs";

describe("trailers Lib TEST", ()=>{
    describe("getImdbId", ()=>{
        it("should return IMDB ID", async ()=>{
            const result = await lib.getImdbId(viaplay_url_1);
            expect(result).to.equal(imdb_id_1);
        })
    });

    describe("getTmdbId", ()=>{
        it("should return TMDB ID", async ()=>{
            const result = await lib.getTmdbId(viaplay_url_1);
            expect(result).to.equal(tmdb_id_1);
        })
    });

    describe("getTrailerUrl", ()=>{
        it("should return Trailer URL", async ()=>{
            const result = await lib.getTrailerUrl(viaplay_url_1);
            expect(result).to.contain(trailer_url_1);
        })
    });
});