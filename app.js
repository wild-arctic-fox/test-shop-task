require("dotenv").config();
const express = require("express");
const testPage = require("./routes/index");
const readPage = require("./routes/read");
const createPage = require("./routes/create");
const deletePage = require("./routes/delete");
const updatePage = require("./routes/update");
const bodyParser = require("body-parser");
const { connect } = require("./db/connectDB");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/////////////////////////////////////////////////////////
// Add routers
/////////////////////////////////////////////////////////
app.use("/update", updatePage);
app.use("/delete", deletePage);
app.use("/create", createPage);
app.use("/read", readPage);
app.use("/", testPage);

/////////////////////////////////////////////////////////
// Create server
/////////////////////////////////////////////////////////
const startServer = async () => {
  try {
    await connect(process.env.MONGO_URL);
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is started");
    });
  } catch (e) {
    console.log(e);
    throw new Exception(e);
  }
};
startServer();
