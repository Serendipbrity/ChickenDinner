// ------- FILE FOR STORE MODEL -------


const mongoose = require('mongoose');
const {model} = require('mongoose');

const StoreSchema = new mongoose.Schema({
    routeOrder: {
        type: Number
    },
    storeName: {
        type: String,
        required: [true, 'Store name is required']
        
    },
    storeAddress: {
        // anything goes
        type: mongoose.Schema.Types.Mixed,
        required: [true, 'Store address is required']
        // unique: true
    },
    region: {
        type: String,
    },
    contactName: {
        type: String
    },
    contactInfo: {
        type: mongoose.Schema.Types.Mixed
    },
    whenCanContact: {
        type: mongoose.Schema.Types.Mixed
    },
    gameId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Game'
    }
}, {
    // create updatedAt and createdAt fields
    timestamps: true
});

// model name is Store and then the schema is storeSchema
const Store = model('Store', StoreSchema);
module.exports = {Store};