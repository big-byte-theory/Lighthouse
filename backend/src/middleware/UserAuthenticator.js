import * as expressValidator from "express-validator";
import User from "../models/User.js";

export default class UserValidator {
  static validate = () => {
    try {
      return [
        expressValidator.body("_id").optional().isMongoId(),
        expressValidator
          .body("firstName")
          .notEmpty()
          .isString()
          .withMessage("Please enter your first name"),
        expressValidator
          .body("lastName")
          .notEmpty()
          .isString()
          .withMessage("Please enter your last name"),
        expressValidator
          .body("email")
          .notEmpty()
          .isString()
          .trim()
          .isEmail()
          .normalizeEmail({
            all_lowercase: true,
          })
          .withMessage("An email address is required"),
        expressValidator
          .body("password")
          .notEmpty()
          .isString()
          .trim()
          .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          })
          .withMessage("A valid password should be provided"),
        UserValidator.handleValidationErrors,
      ];
    } catch (e) {
      throw new Error(e.message);
    }
  };

  static checkDuplicateEmail = async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ message: "Email already in use." });
      }
      next();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static handleValidationErrors = (req, res, next) => {
    const errors = expressValidator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
}