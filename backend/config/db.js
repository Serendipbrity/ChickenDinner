// ---- FILE USED TO CONNECT TO MONGODB USING MONGOOSE ----
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path:path.join(__dirname, "../.env") });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/GameSaver', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }) ;
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(error);
    // pass in one for failure
    process.exit(1);
  }
};

module.exports = connectDB;
