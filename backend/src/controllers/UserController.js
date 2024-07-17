import BcryptHash from "../util/BcryptHash.js";
import User from "../models/User.js";
export default class UserController { 
  getUser = async (req, res) => {
    try {
      const user = await User.findById(req.body.id);
      if (!user) throw new Error("User not found");
      return res.status(200).json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  addUser = async (req, res) => {
    const invalidError = new Error("Please enter all fields");
    const hashedPassword = await BcryptHash.hash(req.body.password);
    try {
      if (!req.body) throw invalidError;

      const userDetails = {
        name: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        },
        email: req.body.email,
        password: hashedPassword,
      };

      const newUser = await new User(userDetails);
      await newUser.save();
      if (!newUser._id) throw new Error("Unable to create user");
      return res.status(201).json({
        message: "User registered",
        newUser
      });
    } catch (e) {
      if (e.message === invalidError.message) {
        return res.status(400).json({ status: 400, message: e.message });
      }
      return res.status(500).json({ status: 500, message: e.message });
    }
  };
}