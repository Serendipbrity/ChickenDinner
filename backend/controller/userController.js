// ----- FILE FOR USER ROUTE FUNCTIONALITIES -----

// use error handler instead of having to use try/catch
const asyncHandler = require('express-async-handler');

// User Model
const User = require('../models/userModel');

//  -----GET USERS -----
// route GET /api/users
// access private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// ---- POST (ADD) USER -----
// route POST /api/users
// access private
const postUser = async (req, res) => {
    // if there is no User, prompt to create user
    if (!req.body) { 
        res.status(400)
        throw new Error('Please provide a user');
    }
    const user = await User.create(req.body);
    res.status(200).json( req.body );
}

// ---- PUT (UPDATE) USER -----
// route GET /api/users/id
// access private
const putUser = async (req, res) => {
    if (!req.body) { 
        res.status(400)
        throw new Error('Please provide a user');
    }
    const user = await User.findOneAndUpdate(req.body);
    res.status(200).json(req.body);
}

// ---- DELETE USER -----
// route GET /api/users
// access private
const deleteUser = async (req, res) => {
    if (!req.body) { 
        res.status(400)
        throw new Error('Please provide a user');
    }
    const user = await User.findOneAndDelete(req.body);
    res.status(200).json({message: 'User Deleted', user});
}



module.exports = { getUsers, postUser, putUser, deleteUser };