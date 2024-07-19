import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default class Jwt {
  static generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  };

  static verifyToken = async (req, res, next) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith(`Bearer`)
    ) {
      try {
        // Get token from the header
        token = req.headers.authorization.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Get user from token
        req.user = await User.findById(decoded.userId).select('-password');
        next();
      } catch (e) {
        res.status(401).send({ message: `Unauthorized` });
        return;
      }
    };

    if (!token) {
      return res.status(401).send({ message: `No token provided` });
    }
  };
}