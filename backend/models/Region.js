// ------- FILE FOR REGION MODEL -------

const mongoose = require("mongoose");
const { model } = require("mongoose");

const { Store} = require('../models/Store');

const RegionSchema = new mongoose.Schema({
  regionName: {
    type: String,
    enum: ["North", "South", "East", "West", "Central", "Deep West", "Peninsulas"],
  },
//   stores: {
//     type: [{ Store }],
// },
  storeId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store"
  }],
});


const Region = model("Region", RegionSchema);
module.exports = { Region };
