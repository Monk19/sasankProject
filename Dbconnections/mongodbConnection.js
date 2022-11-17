const { MongoClient } = require("mongodb");
const Uri =
  "mongodb+srv://sasank:cart%40123@cart.jxcgfrk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(Uri);
module.exports = client;
