// ----- FILE FOR USER MODEL ------

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
    }, {
        timestamps: true
    });

    module.exports = mongoose.model('User', UserSchema);