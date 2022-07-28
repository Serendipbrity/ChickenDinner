//---- ONLY USE THIS FILE IF YOU CHANGE THE PROJECT TO A REST API -----

// -------- FILE USED FOR GAME ROUTES --------


// so you can user express server
const express = require('express');
const router = express.Router();
const {getGames, postGame, putGame, deleteGame} = require('../controller/gameController');


// ---- GET GAMES ---- &&
// ---- POST (ADD) GAME ----
router.route('/').get(getGames).post(postGame);

// ---- PUT (UPDATE) GAME ---- &&
// ---- DELETE GAME ----
router.route('/:id').put(putGame).delete(deleteGame);

module.exports = router;