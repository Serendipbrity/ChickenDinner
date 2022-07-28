// ------- FILE FOR GAME MODEL -------

const mongoose = require("mongoose");
const { model } = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    gameBrand: {
      type: String,
    },
    gameType: {
      type: mongoose.Schema.Types.Mixed,
    },
    machineNumber: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Game = model("Game", GameSchema);
module.exports = { Game };
