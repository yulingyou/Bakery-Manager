var mongoose = require("mongoose");
require('dotenv').config()({path: './.env.test'});

beforeAll(function (done) {
  const mongoDB = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ds0ycgm.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

afterAll(function (done) {
  mongoose.connection.close(true, function () {
    done();
    console.log("CONNECTOIN CLOSED")
  });
});
