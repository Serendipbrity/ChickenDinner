
// const { users, stores, regions, games } = require('../sampleData');
const { User } = require('../models/userModel');
const { Store } = require('../models/storeModel');
const { Region } = require('../models/regionModel');
const { Game } = require('../models/gameModel');

const { GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema, 
    GraphQLList,
    GraphQLInt,

} = require('graphql');


// --------------- USER TYPE ------------------
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

//  ---------------- STORE TYPE -----------------
const StoreType = new GraphQLObjectType({
    name: 'Store',
    fields: () => ({
        id: { type: GraphQLID },
        routeOrder: { type: GraphQLInt },
        storeName: { type: GraphQLString },
        storeAddress: { type: GraphQLString },
        region: { type: GraphQLString },
        contactName: { type: GraphQLString },
        contactInfo: { type: GraphQLString },
        whenCanContact: { type: GraphQLString },
        gameId: { type: new GraphQLList(GraphQLID) },
        game: {
            type: (GameType),
            resolve(parent, args) {
                // return games.find((game) => game.id === parent.gameId);
                return games.findById(parent.gameId);
            }
        }
    })
});

// ---------------- GAME TYPE -----------------
const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        id: { type: GraphQLID },
        gameBrand: { type: GraphQLString },
        GameType: { type: GraphQLString }
        // add reports
    })
});

// --------------- REGION TYPE ------------------
const RegionType = new GraphQLObjectType({
    name: 'Region',
    fields: () => ({
        id: { type: GraphQLID },
        regionName: { type: GraphQLString },
        // storeId: { type: new GraphQLList(GraphQLID) },
        store: {
            type:(StoreType),
            resolve(parent, args) {
                // return stores.find((store) => store.id === parent.storeId);
                return stores.findById(parent.storeId);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                // return users;
                return User.find();
            }

        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return users.find(user => user.id === args.id);
                return User.findById(args.id);
            }
        },
        stores: {
            type: new GraphQLList(StoreType),
            resolve(parent, args) {
                // return stores;
                return Store.find();
            }

        },
        store: {
            type: StoreType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return stores.find(region => region.id === args.id);
                return Store.findById(args.id);
            }
        },
        regions: {
            type: new GraphQLList(RegionType),
            resolve(parent, args) {
                // return regions;
                return Region.find();
            }

        },
        region: {
            type: RegionType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return regions.find(region => region.id === args.id);
                return Region.findById(args.id);
            }
        },
        games: {
            type: new GraphQLList(GameType),
            resolve(parent, args) {
                // return games;
                return Game.find();
            }
        },
        game: {
            type: GameType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return games.find(game => game.id === args.id);
                return Game.findById(args.id);
            }
        }
    }
});




// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         store: {
//             type: StoreType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, args) { 
//                 return stores.find(store => store.id === args.id);
//             }
//              }
//         }
// });
    
module.exports = new GraphQLSchema({
    query: RootQuery
});