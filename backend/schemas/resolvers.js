// // ----- FILE ONLY USED IF YOU SEPARATE SCHEMA.JS -----

// const { async } = require("rxjs");
// const { User } = require("../models/User");
// const { Store } = require("../models/Store");
// const { Region } = require("../models/Region");
// const { Game } = require("../models/Game");
// const { Report } = require("../models/Report");

// // this file was orininally in the backend/schemas/

// // ----- FILE FOR FUNCTIONS THAT EXECUTE WHEN YOU MAKE A REQUEST ----

// const resolvers = {
//     Query: {
//     me: async (parent, args, context) => {
//         if (context.user) {
//           const userData = await User.findOne({ _id: context.user._id })
//             .select('-__v -password');
          
//           return userData;
//         }
//         throw new AuthenticationError('You must be logged in to access this data');
//     }, 
//     users: async () => {
//       return User.find()
//         .select('-__v -password');
//     },
//     user: async (parent, { username }) => { 
//       return User.findOne({ username })
//       .select('-__v -password');
//     },
//     regions: async () => { 
//       return Region.find()
//       .select('-__v -password');
//     },
//     region: async (parent, { regionName  }) => { 
//       return Region.findOne({ regionName })
//         .select('-__v -password')
//         .populate('storeId')
//         .populate('gameId')
//         .populate('reportId');
//     },
//     stores: async () => { 
//       return Store.find()
//         .select('-__v -password')
//         .populate('gameId')
//         .populate('regionId')
//         .populate('reportId');
//     },
//     store: async (parent, { _id }) => {
//       return Store.findOne({ _id })
//         .select('-__v -password')
//         .populate('gameId')
//         .populate('regionId')
//         .populate('reportId');
//     }
//   },
//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = new User.create(args);
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { username, password }) => { 
//       const user = await User.findOne({ username });
//       if (!user) {
//         throw new AuthenticationError('Invalid credentials');
//       }
//       const isValid = await user.comparePassword(password);
//       if (!isValid) {
//         throw new AuthenticationError('Invalid credentials');
//       }
//       const token = signToken(user);
//       return { token, user };
//     },
//     addStore: async (parent, args) => { 
//       const store = new Store.create(args);
//       return store;
//     },
//     addStoreToRegion: async (parent, args, context) => {
//       if (context.region) {
//         const store = await Store.findOne({ _id: args.storeId });

//         await Region.findOneAndUpdate({ _id: args.regionId }, { $push: { storeId: store._id } },
//           { new: true });
//         return store;
//       }
//       throw new AuthenticationError('You must be logged in to access this data');
    
//       }
//   }
// };
 
  
  

  
//   module.exports = resolvers;