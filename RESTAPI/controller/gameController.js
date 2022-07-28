//---- ONLY USE THIS FILE IF YOU CHANGE THE PROJECT TO A REST API -----

// ----- FILE FOR GAME ROUTE FUNCTIONALITIES -----

// use error handler instead of having to use try/catch
const asyncHandler = require('express-async-handler');


// Game Model
const Game = require('../../backend/models/Game');

// ----- GET GAMES -----
// route GET /api/games
// access private
const getGames = asyncHandler(async (req, res) => {
    if (!req.body) { 
        res.status(400)
        throw new Error('Please provide a store');
    }
    const games = await Game.find();
    res.status(200).json({ games });
});

// ----- POST (ADD) GAME -----
// route POST /api/games
// access private
const postGame = asyncHandler(async (req, res) => {
    if (!req.body) { 
        res.status(400)
        throw new Error('Please provide a store');
    }
    const game = await Game.create(req.body);
    res.status(200).json({ game });
});

// ------ PUT (UPDATE) GAME -----
// route PUT /api/games/id
// access private
const putGame = asyncHandler(async (req, res) => {
    if (!req.body) { 
        res.status(400)
        throw new Error('Please provide a store');
    }
    const game = await Game.findOneAndUpdate(req.body);

    res.status(200).json( req.body );
});

// ----- DELETE GAME -----
// route DELETE /api/games/id
// access private
const deleteGame = asyncHandler(async (req, res) => {
    if (!req.body) { 
        res.status(400)
        throw new Error('Please provide a store');
    }
    const game = await Game.findOneAndDelete(req.body);

    res.status(200).json({ message: 'Game Deleted', game });
});



module.exports = { getGames, postGame, putGame, deleteGame };