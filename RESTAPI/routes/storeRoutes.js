//---- ONLY USE THIS FILE IF YOU CHANGE THE PROJECT TO A REST API -----


// -------- FILE USED FOR STORE ROUTES --------


// so you can user express server
const express = require('express');
const router = express.Router();
const {getStores, postStore, putStore, deleteStore} = require('../../RESTAPI/controller/storeController');


// ---- GET STORES ---- &&
// --- POST (ADD) STORE ----
router.route('/').get(getStores).post(postStore);

// --- PUT (UPDATE) STORE ---- &&
// --- DELETE STORE ----
router.route('/:id').put(putStore).delete(deleteStore);

module.exports = router;