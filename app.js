const express = require("express");
const testPage = require("./routes/index");

const app = express();

const PORT = process.env.PORT || 3000;

/////////////////////////////////////////////////////////
// Add routers
/////////////////////////////////////////////////////////
app.use("/", testPage);


/////////////////////////////////////////////////////////
// Create server
/////////////////////////////////////////////////////////
const startServer = async () => {
  try {
    app.listen(PORT, () => {
        console.log("First Log");
      });
  } catch (e) {
    throw new Exception(e);
  }
};
startServer();
