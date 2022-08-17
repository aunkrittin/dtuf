const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((error) => {
      console.log("Error connecting to the database");
      console.error(error);
      process.exit(1);
    });
};