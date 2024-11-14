const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const connect = asyncHandler(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB Connected Successfully");
});

module.exports = connect;
