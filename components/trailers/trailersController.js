const express = require('express');
const lib = require("./trailersLib");

const router = express.Router();

// GETS A SINGLE CAR FROM THE DATABASE
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