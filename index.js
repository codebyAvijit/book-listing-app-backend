const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
const monogoDbUrl =
  "mongodb+srv://deviljitap:GaPqzYXxjhNPHuFH@cluster0.ecrghia.mongodb.net/prt";
// const monogoDbUrl = "mongodb://localhost:27017/prtdatabase";
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || monogoDbUrl;

mongoose.connect(MONGODB_URI, { dbName: "books" }, (err) => {
  if (err) {
    console.log("Connected Successfully");
    console.log(err);
  }
});
mongoose.connection.on("connected", () => {
  console.log("Connection to database is successfull");
});

app.listen(PORT, () =>
  console.log(`The Server is up and Running on port ${PORT}`)
);
