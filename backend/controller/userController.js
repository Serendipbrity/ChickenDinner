// ----- FILE FOR USER ROUTE FUNCTIONALITIES -----

// use error handler instead of having to use try/catch
const asyncHandler = require('express-async-handler');


//  -----GET USERS -----
// route GET /api/users
// access private
const getUsers = asyncHandler( async (req, res) => {
    console.log(req.body)
    res.status(200).json({message: 'Get Users'});
});

// ---- POST (ADD) USER -----
// route POST /api/users
// access private
const postUser = async (req, res) => {
    // if there is no User, prompt to create user
    if (!req.body.text) {
        res.status(400)
            .json({ message: 'No text provided' });
        // throw new Error('No text provided');
    }  
    res.json(req.body)
    console.log(req.body)
    res.status(200).json({ message: 'Create User' });
}

// ---- PUT (UPDATE) USER -----
// route GET /api/users/id
// access private
const putUser = async (req, res) => {
    res.status(200).json({message: 'Update User'});
}

// ---- DELETE USER -----
// route GET /api/users
// access private
const deleteUser = async (req, res) => {
    res.status(200).json({message: 'Delete User'});
}



module.exports = { getUsers, postUser, putUser, deleteUser };