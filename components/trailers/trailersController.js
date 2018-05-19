const trailersLib = require("./trailersLib");
const config = require("../../config")
const express = require('express');

const router = express.Router();
const lib = new trailersLib(config);

/**
 * GET list of trailers given a movie's viaplay resource url
 */
router.get('/:movie_url', async (req, res, next) => {    
    try{
        const links = await lib.getTrailerUrl(req.params.movie_url);
        if(!links) return res.status(404).send("No trailer found.");
        res.status(200).send(links);
    }
    catch(error){
        if (error) return res.status(500).send("There was a problem finding the trailer.");
    }
});

module.exports = router;