//---- ONLY USE THIS FILE IF YOU CHANGE THE PROJECT TO A REST API -----


// ------ FILE USED FOR REGION ROUTES------


// so you can user express server
const express = require('express');
const router = express.Router();
const {getRegions, postRegion, putRegion, deleteRegion} = require('../../RESTAPI/controller/regionController');


// -- GET REGIONS -- && 
// --- POST(ADD) REGION ----
router.route('/').get(getRegions).post(postRegion);


// ---PUT (UPDATE) REGION && ----
// --- DELETE REGION -----
router.route('/:id').put(putRegion).delete(deleteRegion);


module.exports = router;