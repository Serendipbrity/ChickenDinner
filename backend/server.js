// ------ THIS FILE IS THE ENTRY POINT FOR THE SERVER -------

const colors = require('colors');
const express = require('express');
// dotenv file with environment variables in it
const dotenv = require('dotenv').config();

// const { errorHandler } = require('./middleware/errorMiddleware');

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const schema = require('./schemas');
const connectDB = require('./config/db');

// run connection to mongodb
connectDB();

const {graphqlHTTP} = require('express-graphql'); 
// variable for port. If .env file not found, use 3000 
const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// initialize express
const app = express();

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: process.env.NODE_ENV === 'development'
}));

// middleware so we can receive data instead of undefined
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/userRoutes'));
// app.use('api/regions', require('./routes/regionRoutes'));
app.use('/api/stores', require('./routes/storeRoutes'));
app.use('/api/games', require('./routes/gameRoutes'));
// app.use('/api/reports', require('./routes/reportRoutes'));

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`)
        console.log(`Use GraphQL Playground at http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startApolloServer(typeDefs, resolvers);
// overwrite default express error handler
// app.use(errorHandler);


