// ---- FILE USED TO CONNECT TO MONGODB USING MONGOOSE ----
const mongoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/GameSaver', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    );
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
