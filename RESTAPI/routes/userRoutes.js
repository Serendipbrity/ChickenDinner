//---- ONLY USE THIS FILE IF YOU CHANGE THE PROJECT TO A REST API -----


// ------ FILE USED FOR USER ROUTES------


// so you can user express server
const express = require('express');
const router = express.Router();
const {getUsers, postUser, putUser, deleteUser} = require('../../RESTAPI/controller/userController');


// -- GET USERS -- && 
// --- POST(ADD) USER ----
router.route('/').get(getUsers).post(postUser);


// ---PUT (UPDATE) USERS && ----
// --- DELETE USER -----
router.route('/:id').put(putUser).delete(deleteUser);


module.exports = router;