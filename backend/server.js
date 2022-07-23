// THIS FILE IS THE ENTRY POINT FOR THE SERVER

const express = require('express');
// dotenv file with environment variables in it
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
// variable for port. If .env file not found, use 3000 
const PORT = process.env.PORT || 3000;
// initialize express
const app = express();


// middleware so we can receive data instead of undefined
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/games', require('./routes/gameRoutes'));
app.use('/api/stores', require('./routes/storeRoutes'));

// overwrite default express error handler
// app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
