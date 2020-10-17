const mongoose = require("mongoose");

const connect = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { connect };
