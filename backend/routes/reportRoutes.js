// ------ FILE USED FOR REPORT ROUTES------


// so you can user express server
const express = require('express');
const router = express.Router();
const {getReports, postReport, putReport, deleteReport} = require('../controller/reportController');


// -- GET REPORTS -- && 
// --- POST(ADD) REPORT ----
router.route('/').get(getReports).post(postReport);


// ---PUT (UPDATE) REPORT && ----
// --- DELETE REPORT -----
router.route('/:id').put(putReport).delete(deleteReport);


module.exports = router;