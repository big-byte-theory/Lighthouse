import * as expressValidator from "express-validator";
import Llm from "../models/Llm.js";

export default class LlmAuthenticator {
  static validate = () => {
    try {
      return [
        expressValidator.body("_id").optional().isMongoId(),
        expressValidator
          .body("name")
          .notEmpty()
          .isString()
          .withMessage("Please enter the title of the LLM"),
        expressValidator
          .body("type")
          .notEmpty()
          .isString()
          .withMessage("Please select the type of the LLM"),
        expressValidator
          .body("data_id")
          .notEmpty()
          .isNumeric()
          .withMessage("Please enter the LLM data ID"),
        expressValidator
          .body("organisation")
          .notEmpty()
          .isString()
          .withMessage("Please enter the organisation of the LLM"),
        expressValidator
          .body("description")
          .isString()
          .withMessage("Please enter the description of the LLM"),
        expressValidator
          .body("created_date")
          .isDate()
          .withMessage("Please enter the created date of the LLM"),
        expressValidator
          .body("url")
          .notEmpty()
          .isString()
          .withMessage("Please enter the URL of the LLM"),
        expressValidator
          .body("datasheet")
          .notEmpty()
          .isNumeric()
          .withMessage("Please enter the datasheet of the LLM"),
        expressValidator
          .body("modality")
          .notEmpty()
          .isString()
          .withMessage("Please enter the modality of the LLM"),
        expressValidator
          .body("size")
          .isString()
          .withMessage("Please enter the size of the LLM"),
        expressValidator 
          .body("sample")
          .isString()
          .withMessage("Please enter the sample of the LLM"),
        expressValidator
          .body("analysis")
          .isString()
          .withMessage("Please enter the analysis of the LLM"),
        expressValidator
          .body("location")
          .isString()
          .withMessage("Please enter the location of the LLM"),
        expressValidator
          .body("dependencies")
          .isString()
          .withMessage("Please enter the dependencies of the LLM"),
        expressValidator
          .body("included")
          .isDate()
          .withMessage("Please enter the included of the LLM"),
        expressValidator
          .body("excluded")
          .isString()
          .withMessage("Please enter the excluded of the LLM"),
        expressValidator
          .body("quality_control")
          .isString()
          .withMessage("Please enter the quality control of the LLM"),
        expressValidator
          .body("access")
          .isString()
          .withMessage("Please enter the access of the LLM"),
        expressValidator
          .body("licence")
          .isString()
          .withMessage("Please enter the licence of the LLM"),
        expressValidator
          .body("intended_uses")
          .isString()
          .withMessage("Please enter the intended uses of the LLM"),
        expressValidator
          .body("prohibited_uses")
          .isString()
          .withMessage("Please enter the prohibited uses of the LLM"),
        LlmAuthenticator.handleValidationErrors,
      ];
    } catch (e) {
      throw new Error(e.message);
    }
  };
  
  static handleValidationErrors = (req, res, next) => {
    const errors = expressValidator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
}