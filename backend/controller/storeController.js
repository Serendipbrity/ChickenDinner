// ----- FILE FOR STORE ROUTE FUNCTIONALITIES -----

// use error handler instead of having to use try/catch
const asyncHandler = require('express-async-handler');


// ---- GET STORES -----
// route GET /api/stores
// access private
const getStores = asyncHandler( async(req, res) => {
    res.status(200).json({message: 'Get Stores'});
});

//  ----- POST (ADD) STORE -----
// route POST /api/stores
// access private
const postStore = asyncHandler( async(req, res) => {
    res.status(200).json({message: 'Create Store'});
});

//  ----- PUT (UPDATE) STORE -----
// route PUT /api/stores/id
// access private
const putStore = asyncHandler( async(req, res) => {
    res.status(200).json({message: 'Update Store'});
});

// ----- DELETE STORE -----
// route DELETE /api/stores/id
// access private
const deleteStore = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete Store' });
});

module.exports = { getStores, postStore, putStore, deleteStore };