// ----- FILE FOR GAME ROUTE FUNCTIONALITIES -----

// use error handler instead of having to use try/catch
const asyncHandler = require('express-async-handler');


// ----- GET GAMES -----
// route GET /api/games
// access private
const getGames = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Games' });
});

// ----- POST (ADD) GAME -----
// route POST /api/games
// access private
const postGame = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Create Game' });
});

// ------ PUT (UPDATE) GAME -----
// route PUT /api/games/id
// access private
const putGame = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update Game' });
});

// ----- DELETE GAME -----
// route DELETE /api/games/id
// access private
const deleteGame = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete Game' });
});



module.exports = { getGames, postGame, putGame, deleteGame };