require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require('axios');

switch (process.argv[2]) {
    case 'concert-this':
        //axios to bit;
        //console.log results;
        break;
    
    case 'spotify-this-song':
        //axios to spotify;
        //console.log results
        break;

    case 'movie-this':
        //axios to omdb;
        //console.log results
        break;

    case 'do-what-it-says':
        //run random.txt thru spotify-this-song
        //console.log results
        break;

    default:
        console.log('Invalid request');
}       
