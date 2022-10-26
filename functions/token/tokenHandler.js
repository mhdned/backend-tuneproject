/*------<IMPORTS>------*/
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
/*------<CREATE TOKEN USER>------*/
exports.createToken = async (userID) => {
  try {
    let token = jwt.sign({ userID }, process.env.JWT_SECURE_PK, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    return token;
  } catch (error) {
    /*------<X><SERVER ERROR>------*/
    console.log(error);
    return res.status(500).send(error);
  }
};
/*------<VERIFY TOKEN>------*/
exports.verifyToken = asyncHandler(async (req, res, next) => {
    try {
      token = req.headers.authorization;
      if (!token) {
        res.status(404).send("TOKEN ERROR :: TOKEN IS INVALID");
      }
      if (token.startsWith("Bearer")) {
        token = token.split(" ")[1];
      }
      const decoded = jwt.verify(token, process.env.JWT_SECURE_PK);
      req.userId = decoded.userID;
      next();
    } catch (error) {
      /*------<X><SERVER ERROR>------*/
      console.log(error);
      return res.status(500).send("SERVER ERROR :: THERE IS A PROBLEM | 🧯");
    }
  });