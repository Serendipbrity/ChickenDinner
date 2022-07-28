// ----- FILE ONLY USED IF YOU SEPARATE SCHEMA.JS -----

// this file was orininally in the backend/schemas/


// ------ FILE FOR DEFINING THE QUERY AND MUTATION RESOLVERS -----

// import the gql tagged template function
const { gql } = require('apollo-server-express');


// create our typeDefs
const typeDefs = gql`
type Store {
    _id: ID
    routeOrder: Int
    storeName: String
    storeAddress: String
}
type Query {
    stores: [Store]
  }
`;

// export the typeDefs
module.exports = typeDefs;