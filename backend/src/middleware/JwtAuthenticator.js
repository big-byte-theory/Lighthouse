import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default class Jwt {
  static generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  };

  static verifyToken = async (req, res, next) => {
    // let token;

    // if (
    //   req.headers.authorization &&
    //   req.headers.authorization.startsWith(`Bearer`)
    // ) {
    //   try {
    //     // Get token from the header
    //     token = req.headers.authorization.split(' ')[1];

    //     // Verify token
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //     //Get user from token
    //     req.user = await User.findById(decoded.userId).select('-password');
    //     next();
    //   } catch (e) {
    //     res.status(401).send({ message: `Unauthorized` });
    //     return;
    //   }
    // };

    

    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      return req.user;
    }

    return null;
  };

  static verifyUser = async (req, res, next) => {
    try {
      const tokenVerified = await JwtAuthenticator.verifyToken(req);
      if (!tokenVerified) {
        return res.status(401).send({ message: 'No token provided' });
      }
      next();
    } catch (e) {
      res.status(401).send({ message: 'Unauthorized' });
    }
  };

  static verifyAdmin = async (req, res, next) => {
    try {
      const tokenVerified = await JwtAuthenticator.verifyToken(req);
      if (!tokenVerified) {
        return res.status(401).send({ message: 'No token provided' });
      }
      if (tokenVerified.role !== 'admin') {
        return res.status(401).send({ message: 'Unauthorized' }); 
      }
      next();
    } catch (e) {
      res.status(401).send({ message: `Unauthorized access` });
      return;
    }
  };
}