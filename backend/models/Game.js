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
    reportId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
    }],
    storeId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
    }],
  },
  {
    timestamps: true,
  }
);

const Game = model("Game", GameSchema);
module.exports = { Game };
