// ----- FILE ONLY USED IF YOU SEPARATE SCHEMA.JS -----

// this file was orininally in the backend/schemas/

// ----- FILE FOR FUNCTIONS THAT EXECUTE WHEN YOU MAKE A REQUEST ----

const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
  module.exports = resolvers;