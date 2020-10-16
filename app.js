require("dotenv").config();
const express = require("express");
const testPage = require("./routes/index");
const readPage = require("./routes/read");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));

/////////////////////////////////////////////////////////
// Add routers
/////////////////////////////////////////////////////////
app.use("/read", readPage);
app.use("/", testPage);

/////////////////////////////////////////////////////////
// Create server
/////////////////////////////////////////////////////////
const startServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gehfl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    app.listen(process.env.PORT || 3000, () => {
      console.log("First Log");
    });
  } catch (e) {
    console.log(e);
    throw new Exception(e);
  }
};
startServer();
