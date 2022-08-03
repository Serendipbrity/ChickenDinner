// const {postUser, getUsers, putUser, deleteUser} = require('../controller/userController');
// const { users, stores, regions, games } = require('../sampleData');
const { User } = require("../models/User");
const { Store } = require("../models/Store");
const { Region } = require("../models/Region");
const { Game } = require("../models/Game");
const {Report} = require('../models/Report');
const mongoose = require("mongoose");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLEnumType
} = require("graphql");

// --------------- USER TYPE ------------------
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

// --------------- REGION TYPE ------------------
const RegionType = new GraphQLObjectType({
  name: "Region",
  fields: () => ({
    id: { type: GraphQLID },
    regionName: { type: GraphQLString },
    // storeId: { type: new GraphQLList(GraphQLID) },

    // all stores in this region
    store: {
      type: StoreType,
      resolve(parent, args) {
        // return stores.find((store) => store.id === parent.storeId);
        return Store.findById(parent.storeId);
      },
      },
    //   storeAdd: {
    //       type: StoreType,
    //       resolve(parent, args) { 
    //           return Store.findById(child.regionId);
    //        }
    // }
  }),
});


//  ---------------- STORE TYPE -----------------
const StoreType = new GraphQLObjectType({
  name: "Store",
  fields: () => ({
    id: { type: GraphQLID },
    routeOrder: { type: GraphQLInt },
    storeName: { type: GraphQLString },
      storeAddress: { type: GraphQLString },
    // TODO -- make region an options list from available regions with option to create new region
    region: { type: GraphQLString },
    contactName: { type: GraphQLString },
    contactInfo: { type: GraphQLString },
    whenCanContact: { type: GraphQLString },
    directions: { type: GraphQLString },
    // gameId: { type: new GraphQLList(GraphQLID) },
    // all games associated with this store
    game: {
      type: GameType,
      resolve(parent, args) {
        // return games.find((game) => game.id === parent.gameId);
        return Game.findById(parent.gameId);
      },
    },
  }),
});

// ---------------- GAME TYPE -----------------
const GameType = new GraphQLObjectType({
  name: "Game",
  fields: () => ({
    id: { type: GraphQLID },
    gameBrand: { type: GraphQLString },
    gameType: { type: GraphQLString },
    machineNumber: { type: GraphQLInt },
    report: {
      type: ReportType,
      resolve(parent, args) {
        return Report.findById(parent.reportId);
      },
    },
  }),
  // add reports
  // report: {
  //     type: (ReportType),
  //     resolve(parent, args) {
  //         return Report.findById(parent.reportId);
  //     }
  // }
});


// ---------------- REPORT TYPE -----------------
const ReportType = new GraphQLObjectType({
  name: "Report",
  fields: () => ({
    id: { type: GraphQLID },
    storeName: { type: GraphQLString },
    beginDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    machineNumber: { type: GraphQLInt },
    lifetimeIn: { type: GraphQLInt },
    lifetimeOut: { type: GraphQLInt },
    lifetimeTotal: { type: GraphQLInt },
    pOutTotal: { type: GraphQLInt },
    previousIn: { type: GraphQLInt },
    previousOut: { type: GraphQLInt },
    periodIn: { type: GraphQLInt },
    periodOut: { type: GraphQLInt },
    net: { type: GraphQLInt },
    locationPercentage: { type: GraphQLInt },
    operatorPercentage: { type: GraphQLInt },
    profit: { type: GraphQLInt },
    collect: { type: GraphQLInt },
    paidOut: { type: GraphQLInt },
    locationTotal: { type: GraphQLInt },
    operatorTotal: { type: GraphQLInt },
    signature: { type: GraphQLString },
  })
});


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    reports: {
      type: new GraphQLList(ReportType),
      resolve(parent, args) { 
        return Report.find();
      }
    },
    report: {
      type: ReportType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) { 
        return Report.findById(args.id);
      },
       },
    users: {
      type: new GraphQLList(UserType),
      resolve: (parent, args) =>{
        // return users;
        return User.find();
      },
    },

    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return users.find(user => user.id === args.id);
        return User.findById(args.id);
      },
    },
    stores: {
      type: new GraphQLList(StoreType),
      args: { region: { type: GraphQLString } },
      resolve(parent, args) {
        // search by region
        const params = args.region ? { region: args.region } : {};
        // search by storeName
        const storeNameSearch = args.storeName ? { storeName: args.storeName } : {};
        return Store.find( params, storeNameSearch);
      },
    },
    store: {
      type: StoreType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return stores.find(region => region.id === args.id);
        return Store.findById(args.id);
      },
    },
    regions: {
      type: new GraphQLList(RegionType),
      resolve(parent, args) {
        // return regions;
        return Region.find();
      },
    },
    region: {
      type: RegionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return regions.find(region => region.id === args.id);
        return Region.findById(args.id);
      },
    },
    storesByRegion: {
      type: new GraphQLList(StoreType),
      args: { regionName: { type: GraphQLString } },
      resolve(parent, args) { 
        return Store.find({regionName: args.regionName});
       }
    },
    games: {
      type: new GraphQLList(GameType),
      resolve(parent, args) {
        // return games;
        return Game.find();
      },
    },
    game: {
      type: GameType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return games.find(game => game.id === args.id);
        return Game.findById(args.id);
      },
    },
  },
});

// ----------------- MUTATION TYPE -----------------
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // -----ADD REPORT ------
    addReport: {
      type: ReportType,
      args: {
        storeName: { type: GraphQLString },
        beginDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
        machineNumber: { type: GraphQLInt },
        lifetimeIn: { type: GraphQLInt },
        lifetimeOut: { type: GraphQLInt },
        lifetimeTotal: { type: GraphQLInt },
        pOutTotal: { type: GraphQLInt },
        previousIn: { type: GraphQLInt },
        previousOut: { type: GraphQLInt },
        periodIn: { type: GraphQLInt },
        periodOut: { type: GraphQLInt },
        net: { type: GraphQLInt },
        locationPercentage: { type: GraphQLInt },
        operatorPercentage: { type: GraphQLInt },
        profit: { type: GraphQLInt },
        collect: { type: GraphQLInt },
        paidOut: { type: GraphQLInt },
        locationTotal: { type: GraphQLInt },
        operatorTotal: { type: GraphQLInt },
        signature: { type: GraphQLString },
      },
      resolve(parent, args) { 
        const report = new Report({
          storeName: args.storeName,
          beginDate: args.beginDate,
          endDate: args.endDate,
          machineNumber: args.machineNumber,
          lifetimeIn: args.lifetimeIn,
          lifetimeOut: args.lifetimeOut,
          lifetimeTotal: args.lifetimeTotal,
          pOutTotal: args.pOutTotal,
          previousIn: args.previousIn,
          previousOut: args.previousOut,
          periodIn: args.periodIn,
          periodOut: args.periodOut,
          net: args.net,
          locationPercentage: args.locationPercentage,
          operatorPercentage: args.operatorPercentage,
          profit: args.profit,
          collect: args.collect,
          paidOut: args.paidOut,
          locationTotal: args.locationTotal,
          operatorTotal: args.operatorTotal,
          signature: args.signature,
        });
        return report.save();
       }
    },
        // ----- UPDATE REPORT -----
        updateReport: {
          type: ReportType,
          args: {
            id: { type: GraphQLID },
            storeName: { type: GraphQLString },
            beginDate: { type: GraphQLString },
            endDate: { type: GraphQLString },
            machineNumber: { type: GraphQLInt },
            lifetimeIn: { type: GraphQLInt },
            lifetimeOut: { type: GraphQLInt },
            lifetimeTotal: { type: GraphQLInt },
            pOutTotal: { type: GraphQLInt },
            previousIn: { type: GraphQLInt },
            previousOut: { type: GraphQLInt },
            periodIn: { type: GraphQLInt },
            periodOut: { type: GraphQLInt },
            net: { type: GraphQLInt },
            locationPercentage: { type: GraphQLInt },
            operatorPercentage: { type: GraphQLInt },
            profit: { type: GraphQLInt },
            collect: { type: GraphQLInt },
            paidOut: { type: GraphQLInt },
            locationTotal: { type: GraphQLInt },
            operatorTotal: { type: GraphQLInt },
            signature: { type: GraphQLString },
          },
          resolve(parent, args) {
              return Report.findByIdAndUpdate(args.id, {
                  $set: {
                  storeName: args.storeName,
                  beginDate: args.beginDate,
                  endDate: args.endDate,
                  machineNumber: args.machineNumber,
                  lifetimeIn: args.lifetimeIn,
                  lifetimeOut: args.lifetimeOut,
                  lifetimeTotal: args.lifetimeTotal,
                  pOutTotal: args.pOutTotal,
                  previousIn: args.previousIn,
                  previousOut: args.previousOut,
                  periodIn: args.periodIn,
                  periodOut: args.periodOut,
                  net: args.net,
                  locationPercentage: args.locationPercentage,
                  operatorPercentage: args.operatorPercentage,
                  profit: args.profit,
                  collect: args.collect,
                  paidOut: args.paidOut,
                  locationTotal: args.locationTotal,
                  operatorTotal: args.operatorTotal,
                  signature: args.signature,
                  },
                //   if it is not there, it will create a new one
              }, { new: true });
           }
      },
    // ----DELETE REPORT ------
    deleteReport: {
      type: ReportType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) { 
        return Report.findByIdAndRemove(args.id);
       }
    },
    // ---- ADD USER -----
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        // create a new user
        const user = new User({
          username: args.username,
          email: args.email,
          password: args.password,
        });
        // save new user to database
        return user.save();
      },
    },
    // ----- UPDATE USER-----
updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
  },
  resolve(parent, args) {
    return User.findByIdAndUpdate(args.id, {
      $push: {
        username: args.username,
        email: args.email,
        password: args.password,
      },
    }, { new: true });
  }
},
    // ----- DELETE USER -----
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        // delete user from database
        return User.findByIdAndRemove(args.id);
      },
    },
    // ---- ADD STORE -----
    addStore: {
      type: StoreType,
      args: {
        routeOrder: { type: GraphQLInt },
        storeName: { type: (GraphQLString) },
        storeAddress: { type: (GraphQLString) },
        region: { type: (GraphQLString) },
        contactName: { type: GraphQLString },
        contactInfo: { type: GraphQLString },
        whenCanContact: { type: GraphQLString },
        directions: { type: GraphQLString },
        gameId: { type: new GraphQLList(GraphQLID) }
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
          directions: args.directions,

          gameId: args.gameId,
        });
        // save new store to database
        return store.save();
      },
      },
    // ----- UPDATE STORE -----
      updateStore: {
          type: StoreType,
          args: {
              id: { type: GraphQLNonNull(GraphQLID) },
              routeOrder: { type: GraphQLInt },
              storeName: { type: (GraphQLString) },
              storeAddress: { type: (GraphQLString) },
              region: { type: (GraphQLID), ref: "Region" },
              contactName: { type: (GraphQLString) },
              contactInfo: { type: (GraphQLString) },
              whenCanContact: { type: (GraphQLString) },
              directions: { type: (GraphQLString) },
                gameId: { type: GraphQLID },
          },
          resolve(parent, args) {
            return Store.findByIdAndUpdate(args.id, {
              $set: {
                routeOrder: args.routeOrder,
                storeName: args.storeName,
                storeAddress: args.storeAddress,
                region: args.region,
                contactName: args.contactName,
                contactInfo: args.contactInfo,
                whenCanContact: args.whenCanContact,
                directions: args.directions,
                 gameId: args.gameId ,
              },
              
                //   if it is not there, it will create a new one
              }, { new: true });
           }
      },
    // ----- DELETE STORE -----
    deleteStore: {
      type: StoreType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        // delete user from database
        return Store.findByIdAndRemove(args.id);
      },
    },
    // ----- ADD GAME ------
    addGame: {
      type: GameType,
      args: {
        gameType: { type: GraphQLNonNull(GraphQLString) },
        gameBrand: { type: GraphQLNonNull(GraphQLString) },
        machineNumber: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        // create a new game
        const game = new Game({
          gameType: args.gameType,
          gameBrand: args.gameBrand,
          machineNumber: args.machineNumber,
        });
        // save new game to database
        return game.save();
      },
    },
    // ----- UPDATE GAME -----
    updateGame: {
      type: GameType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        gameType: { type: GraphQLString },
        gameBrand: { type: GraphQLString },
        machineNumber: { type: GraphQLInt },
        reportId: { type: GraphQLID },
      },
      resolve(parent, args) { 
        return Game.findByIdAndUpdate(args.id, {
          $set: {
            gameType: args.gameType,
            gameBrand: args.gameBrand,
            machineNumber: args.machineNumber,
            storeId: args.storeId,
          },
        }, { new: true });
       }
    },
    // ----- DELETE GAME -----
    deleteGame: {
      type: GameType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        // delete game from database
        return Game.findByIdAndRemove(args.id);
      },
    },
    // ----- ADD REGION ------
    addRegion: {
      type: RegionType,
      args: {
          regionName: { type: GraphQLNonNull(GraphQLString) },
          storeId: { type: (GraphQLID) },
      },
      resolve(parent, args) {
        // create a new game
        const region = new Region({
            regionName: args.regionName,
            storeId: args.storeId,
        });
        // save new game to database
        return region.save();
      },
    },
  // -----ADD STORE TO REGION -----
      addStoreToRegion: {
          type: RegionType,
          args: {
              regionId: { type: GraphQLNonNull(GraphQLString) },
              storeId: { type: GraphQLNonNull(GraphQLID) },
          },
          resolve(parent, args) { 
              const storeRegion = new Region({
                  regionId: args.regionId,
                  storeId: args.storeId,
              });
              return storeRegion.save();
           },
    },
    // ----- UPDATE REGION -----
    updateRegion: {
      type: RegionType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        regionName: { type: GraphQLString },
        storeId: { type: GraphQLID },
      },
      resolve(parent, args) { 
        return Region.findByIdAndUpdate(args.id, {
          $set: {
            regionName: args.regionName,
            storeId: args.storeId,
          },
        }, { new: true });
       }
    },
    // ----- DELETE REGION -----
    deleteRegion: {
      type: RegionType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        // delete region from database
        return Region.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

