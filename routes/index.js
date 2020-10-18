const { Router } = require("express");

/////////////////////////////////////////////////////////
// Router for displaying page
/////////////////////////////////////////////////////////
const router = Router();

router.get("/", (req, res) => {
  res.send('hello world');
});

module.exports = router;