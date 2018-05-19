const config = {
    port: process.env.PORT || 3005,
    viaplay_imdb_path: ["_embedded", "viaplay:blocks", 0, "_embedded", "viaplay:product", "content", "imdb"],
    tmdb: {
        url: "https://api.themoviedb.org/3",
        api_key: "e635eac4c86fd6c9734b0b70fbabcdb1"
    }
};

module.exports = config;