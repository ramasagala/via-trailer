# via-trailer
Gives URL to movie trailer, fetched from TheMovieDB (https://www.themoviedb.org/)

## setup
```
$ git clone https://github.com/ramasagala/via-trailer.git
$ cd via-trailer
$ npm install
$ npm test
$ npm start
```
Default url: http://localhost:3005

Default application settings (e.g. port, api key, api url) could be configured in `config.js`

## GET /trailer/:viaplay_url
Takes a viaplay movie resource URL as an input (e.g. https://content.viaplay.se/pc-se/film/arrival-2016), and returns list of trailer video URLs

example: 
```GET http://localhost:3005/trailer/https%3A%2F%2Fcontent.viaplay.se%2Fpc-se%2Ffilm%2Farrival-2016```

will return:
```
[
    "https://www.youtube.com/watch?v=gwqSi_ToNPs",
    "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
    "https://www.youtube.com/watch?v=WH9F4WkvhRk"
]
```

## Dependencies
Implemented using node.js (v10.1.0).
HTTP routing using express.js
Unit Test using mocha + chai
