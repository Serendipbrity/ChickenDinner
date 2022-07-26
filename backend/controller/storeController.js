// ----- FILE FOR STORE ROUTE FUNCTIONALITIES -----

// use error handler instead of having to use try/catch
const asyncHandler = require('express-async-handler');

// Store Model
const Store = require('../models/storeModel');

// --------- GET STORES ------------
// route GET /api/stores
// access private
const getStores = asyncHandler(async (req, res) => {
    // find all stores
    const stores = await Store.find();
    // show all stores
    res.status(200).json(stores);
});

//  ------------ POST (ADD) STORE -------------
// route POST /api/stores
// access private
const postStore = asyncHandler(async (req, res) => {
       // if store body is incorrect or absent, throw error
    if (!req.body) { 
        res.status(400)
        throw new Error('Please provide a store');
    }
    // create the store
    const store = await Store.create(req.body);
    // show the created store
    res.status(200).json({  store });
});

//  ------------- PUT (UPDATE) STORE -----------
// route PUT /api/stores/id
// access private
const putStore = asyncHandler(async (req, res) => {
       // if theres no store with this id, throw error
    if (!req.body) { 
        res.status(400)
        throw new Error('No store with this id');
    }
    const store = await Store.findOneAndUpdate(req.body);
    res.status(200).json(req.body);
});

// ------------ DELETE STORE ----------
// route DELETE /api/stores/id
// access private
const deleteStore = asyncHandler(async (req, res) => {
    // if theres no store with this id, throw error
    if (!req.body) { 
        res.status(400)
        throw new Error('No store with this id');
    }
    const store = await Store.findOneAndDelete(req.body);
    // show store that was deleted with a message stating it was deleted
    res.status(200).json({ message: 'Store Deleted', store });
});

module.exports = { getStores, postStore, putStore, deleteStore };