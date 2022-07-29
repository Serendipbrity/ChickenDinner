// ------- FILE FOR STORE MODEL -------

const mongoose = require("mongoose");
const { model } = require("mongoose");
const {Game} = require('../models/Game');

const StoreSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: 
    // }
    routeOrder: {
      type: Number,
    },
    storeName: {
      type: String,
      required: [true, "Store name is required"],
    },
    storeAddress: {
      // anything goes
      type: mongoose.Schema.Types.Mixed,
      required: [true, "Store address is required"],
      // unique: true
    },
    region: {
      type: String,
    },
    contactName: {
      type: String,
    },
    contactInfo: {
      type: mongoose.Schema.Types.Mixed,
    },
    whenCanContact: {
      type: mongoose.Schema.Types.Mixed,
    },
    directions: {
      type: String,
    },
    // games: [Game]
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
    },
    regionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Region",
    }
  },
  {
    // create updatedAt and createdAt fields
    timestamps: true,
  }
);

// model name is Store and then the schema is storeSchema
const Store = model("Store", StoreSchema);
module.exports = { Store };



// "region": "62e1d4485ef61646250895b6"
// "region": "West"
// "region": "62e1d4485ef61646250895b6"
