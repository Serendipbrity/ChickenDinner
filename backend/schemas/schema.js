// const {postUser, getUsers, putUser, deleteUser} = require('../controller/userController');
// const { users, stores, regions, games } = require('../sampleData');
const { User } = require('../models/User');
const { Store } = require('../models/Store');
const { Region } = require('../models/Region');
const { Game } = require('../models/Game');
const mongoose = require('mongoose');

const { GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema, 
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull } = require('graphql');


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
        // gameId: { type: new GraphQLList(GraphQLID) },
        // all games associated with this store
        game: {
            type: (GameType),
            resolve(parent, args) {
                // return games.find((game) => game.id === parent.gameId);
                return Game.findById(parent.gameId);
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
        gameType: { type: GraphQLString },
        machineNumber: {type: GraphQLInt}
        // add reports
        // report: {
        //     type: (ReportType),
        //     resolve(parent, args) {
        //         return Report.findById(parent.reportId);
        //     }
        // }
    })
});

// --------------- REGION TYPE ------------------
const RegionType = new GraphQLObjectType({
    name: 'Region',
    fields: () => ({
        id: { type: GraphQLID },
        regionName: { type: GraphQLString },
        // storeId: { type: new GraphQLList(GraphQLID) },

        // all stores in this region
        store: {
            type:(StoreType),
            resolve(parent, args) {
                // return stores.find((store) => store.id === parent.storeId);
                return Store.findById(parent.storeId);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: (parent, args) => {
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

// ----------------- MUTATION TYPE -----------------
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // ---- ADD USER -----
        addUser: {
            type: UserType,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                password: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) { 
                // create a new user
                const user = new User({
                    username: args.username,
                    email: args.email,
                    password: args.password
                });
                // save new user to database
                return user.save();
             }
        }, 
         // ----- DELETE USER -----
        deleteUser: {
            type: UserType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) { 
                // delete user from database
                return User.findByIdAndRemove(args.id);
             }
        },
        // ---- ADD STORE -----
        addStore: {
            type: StoreType,
            args: {
                routeOrder: { type: (GraphQLInt) },
                storeName: { type: GraphQLNonNull(GraphQLString) },
                storeAddress: { type: GraphQLNonNull(GraphQLString) },
                region: { type: GraphQLNonNull(GraphQLString) },
                contactName: { type: (GraphQLString) },
                contactInfo: { type: (GraphQLString) },
                whenCanContact: { type: (GraphQLString) },
                // gameId: { type: (GraphQLID) }
            },
            resolve(parent, args) { 
                // create a new store
                const store = new Store({
                    routeOrder: args.routeOrder,
                    storeName: args.storeName,
                    storeAddress: args.storeAddress,
                    region: args.region,
                    contactName: args.contactName,
                    contactInfo: args.contactInfo,
                    whenCanContact: args.whenCanContact,
                });
                // save new store to database
                return store.save();
             }
        },
             // ----- DELETE STORE -----
             deleteStore: {
                type: StoreType,
                args: {
                    id: { type: GraphQLNonNull(GraphQLID) }
                },
                resolve(parent, args) { 
                    // delete user from database
                    return Store.findByIdAndRemove(args.id);
                 }
            },
              // ----- ADD GAME ------
              addGame: {
                type: GameType,
                args: {
                    gameType: { type: GraphQLNonNull(GraphQLString) },
                    gameBrand: { type: GraphQLNonNull(GraphQLString) },
                    machineNumber: { type: GraphQLNonNull(GraphQLInt) }
                },
                resolve(parent, args) { 
                    // create a new game
                    const game = new Game({
                        gameType: args.gameType,
                        gameBrand: args.gameBrand
                    });
                    // save new game to database
                    return game.save();
                 }
        },
        // ----- DELETE GAME -----
        deleteGame: {
            type: GameType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) { 
                // delete game from database
                return Game.findByIdAndRemove(args.id);
             }
        },
                // ----- ADD REGION ------
                addRegion: {
                    type: RegionType,
                    args: {
                        regionName: { type: GraphQLNonNull(GraphQLString) }
                    },
                    resolve(parent, args) { 
                        // create a new game
                        const region = new Region({
                            regionName: args.regionName
                        });
                        // save new game to database
                        return region.save();
                     }
        },
                   // ----- DELETE REGION -----
        deleteRegion: {
            type: RegionType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) { 
                // delete region from database
                return Region.findByIdAndRemove(args.id);
             }
        }
    }
});

    
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});