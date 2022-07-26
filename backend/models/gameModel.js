// ------- FILE FOR GAME MODEL -------

const mongoose = require('mongoose');

const GameModel = new mongoose.Schema({
    gameBrand: {
        type: String,
    },
    gameType: {
        type: mongoose.Schema.Types.Mixed,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Game', GameModel);