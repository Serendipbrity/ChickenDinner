// ------- FILE FOR REGION MODEL -------

const mongoose = require('mongoose');
const {model} = require('mongoose');
// const stores = require('../models/storeModel');

const RegionSchema = new mongoose.Schema({
    regionName: {
        type: String,
    },
    storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
   }
});

module.exports = mongoose.model('Region', RegionSchema);

const Region = model('Region', RegionSchema);
module.exports = {Region};