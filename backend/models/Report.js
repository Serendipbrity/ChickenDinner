//  ------ FILE FOR REPORTS MODEL -------

const mongoose = require("mongoose");
const { model } = require("mongoose");

const ReportSchema = new mongoose.Schema(
  {
    storeName: {
      type: String,
    },
    beginDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    machineNumber: {
      type: Number,
    },
    lifetimeIn: {
      type: Number,
    },
    lifetimeOut: {
      type: Number,
    },
    lifetimeTotal: {
      type: Number,
    },
    pOutTotal: {
      type: Number,
    },
    previousIn: {
      type: Number,
    },
    previousOut: {
      type: Number,
    },
    periodIn: {
      type: Number,
    },
    periodOut: {
      type: Number,
    },
    net: {
      type: Number,
    },
    locationPercentage: {
      type: Number,
    },
    operatorPercentage: {
      type: Number,
    },
    profit: {
      type: Number,
    },
    collect: {
      type: Number,
    },
    paidOut: {
      type: Number,
    },
    locationTotal: {
      type: Number,
    },
    operatorTotal: {
      type: Number,
    },
    signature: {
      type: String,
    },
    gameId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
    }],
    storeId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
    }],
    regionId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Region",
    }],
  },
  {
    timestamps: true,
  }
);

const Report = model("Report", ReportSchema);
module.exports = { Report };
