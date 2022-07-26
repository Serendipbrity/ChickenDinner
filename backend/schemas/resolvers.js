// ----- FILE FOR FUNCTIONS THAT EXECUTE WHEN YOU MAKE A REQUEST ----

const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
  module.exports = resolvers;