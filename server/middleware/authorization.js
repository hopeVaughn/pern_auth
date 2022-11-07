const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {

    const jwtToken = req.header("token");

    if (!jwtToken) {
      res.status(403).json("Not Authorized");
    }

    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);

    req.user = payload.user;

  } catch (err) {
    console.message(err.message);
    res.status(403).json("Not AUthorized");
  }
}