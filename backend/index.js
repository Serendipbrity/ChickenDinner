const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./schemas/schema");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 3000;
const path = require("path");
const app = express();


// module.exports = {
//   resolve: {
//     fallback: {
//       stream: false,
//       crypto: false,
//       util: false
//     }
//   }
// }
// connect to database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static(path.join(__dirname,'../client/build')));
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
