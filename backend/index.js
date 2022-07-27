const express = require('express');
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/schema');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3000;

const app = express();

// connect to database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: process.env.NODE_ENV === 'development'
}));

    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
