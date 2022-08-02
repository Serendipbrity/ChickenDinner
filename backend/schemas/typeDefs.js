// // ----- FILE ONLY USED IF YOU SEPARATE SCHEMA.JS -----

// // this file was orininally in the backend/schemas/


// // ------ FILE FOR DEFINING THE QUERY AND MUTATION RESOLVERS -----

// // import the gql tagged template function
// const { gql } = require('apollo-server-express');


// // create our typeDefs
// const typeDefs = gql`
// type User {
//   _id: ID
//   username: String
//   email: String
//   password: String
//   createdAt: Date
// }
// type Store {
//     _id: ID
//     routeOrder: Int
//     storeName: String
//     storeAddress: String
//     region: String
//     contactName: String
//     contactInfo: String
//     whenCanContact: String
//     directions: String
//     gameId: [Game]
//     regionId: [Region]
//     reportId: [Report]
//     createdAt: Date
// }

// type Region {
//     _id: ID
//     regionName: String
//     storeId: [Store]
//     gameId: [Game]
//     reportId: [Report]
//     createdAt: Date
// }

// type Game {
//     _id: ID
//     gameType: String
//     gameBrand: String
//     machineNumber: Int
//     createdAt: Date
// }

// type Auth {
//   token: User
//   user: User
// }

// type Query {
//   me: User
//   users: [User]
//   stores: [Store]
//   regions: [Region]
//   games: [Game]
//   reports: [Report]
//   store(id: ID!): Store
//   region(id: ID!): Region
//   game(id: ID!): Game
//   report(id: ID!): Report
//   }

//   type Mutation {
//     login(username: String!, password: String!): Auth
//     addUser(username: String!, email: String!, password: String!): Auth
//     updateUser(id: ID!, username: String!, email: String!, password: String!): User
//     deleteUser(id: ID!): User
//     addStore(routeOrder: Int, storeName: String, storeAddress: String, contactName: String, contactInfo: String, whenCanContact: String, directions: String): Store
//     addStoreToRegion(regionId: ID!, storeId: ID!): Region
//     updateStore(id: ID!, routeOrder: Int, storeName: String, storeAddress: String, contactName: String, contactInfo: String, whenCanContact: String, directions: String): Store
//     deleteStore(id: ID!): Store
//     addRegion(regionName: String): Region
//   }
// `;

// // export the typeDefs
// module.exports = typeDefs;