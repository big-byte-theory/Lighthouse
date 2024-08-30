import * as expressValidator from "express-validator";

export default class LlmAuthenticator {
  static validate = () => {
    try {
      return [
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
          .body("organization")
          .notEmpty()
          .isString()
          .withMessage("Please enter the organization of the LLM"),
        expressValidator
          .body("description")
          .optional()
          .isString()
          .withMessage("Please enter the description of the LLM"),
        expressValidator
          .body("created_date")
          .notEmpty()
          .isISO8601()
          .withMessage("Please enter the created date of the LLM"),
        expressValidator
          .body("url")
          .optional()
          .isString()
          .withMessage("Please enter the URL of the LLM"),
        expressValidator
          .body("datasheet")
          .optional()
          .isString()
          .withMessage("Please enter the datasheet of the LLM"),
        expressValidator
          .body("modality")
          .optional()
          .isString()
          .withMessage("Please enter the modality of the LLM"),          
        expressValidator
          .body("size")
          .optional()
          .isString()
          .withMessage("Please enter the size of the LLM"),
        expressValidator 
          .body("sample")
          .optional()
          .isString()
          .withMessage("Please enter the sample of the LLM"),
        expressValidator
          .body("analysis")
          .optional()
          .isString()
          .withMessage("Please enter the analysis of the LLM"),
        // expressValidator
        //   .body("dependencies")
        //   .optional()
        //   .isString()
        //   .withMessage("Please enter the dependencies of the LLM"),
        expressValidator
          .body("included")
          .optional()
          .isString()
          .withMessage("Please enter the included of the LLM"),
        expressValidator
          .body("excluded")
          .optional()
          .isString()
          .withMessage("Please enter the excluded of the LLM"),
        expressValidator
          .body("quality_control")
          .optional()
          .isString()
          .withMessage("Please enter the quality control of the LLM"),
        expressValidator
          .body("access")
          .notEmpty()
          .isString()
          .withMessage("Please enter the access of the LLM"),
        expressValidator
          .body("license")
          .optional()
          .isString()
          .withMessage("Please enter the license of the LLM"),
        expressValidator
          .body("intended_uses")
          .optional()
          .isString()
          .withMessage("Please enter the intended uses of the LLM"),
        expressValidator
          .body("prohibited_uses")
          .optional()
          .isString()
          .withMessage("Please enter the prohibited uses of the LLM"),
        expressValidator
          .body("monitoring")
          .optional()
          .isString()
          .withMessage("Please enter the monitoring of the LLM"),
        expressValidator
          .body("feedback")
          .optional()
          .isString()
          .withMessage("Please enter the feedback of the LLM"),
        expressValidator
          .body("model_card")
          .optional()
          .isString()
          .withMessage("Please enter the model card of the LLM"),
        expressValidator
          .body("training_emissions")
          .optional()
          .isString()
          .withMessage("Please enter the training emissions of the LLM"),
        expressValidator
          .body("training_time")
          .optional()
          .isString()
          .withMessage("Please enter the training time of the LLM"),
        expressValidator
          .body("training_hardware")
          .optional()
          .isString()
          .withMessage("Please enter the training hardware of the LLM"),
        expressValidator
          .body("adaptation")
          .optional()
          .isString()
          .withMessage("Please enter the adaptation of the LLM"),
        expressValidator
          .body("output_space")
          .optional()
          .isString()
          .withMessage("Please enter the output space of the LLM"),
        expressValidator
          .body("terms_of_service")
          .optional()
          .isString()
          .withMessage("Please enter the terms of service of the LLM"),
        expressValidator
          .body("monthly_active_users")
          .optional()
          .isString()
          .withMessage("Please enter the monthly active users of the LLM"),
        expressValidator
          .body("user_distribution")
          .optional()
          .isString()
          .withMessage("Please enter the user distribution of the LLM"),
        expressValidator
          .body("failures")
          .optional()
          .isString()
          .withMessage("Please enter the failures of the LLM"),
        this.handleValidationErrors,
      ];
    } catch (e) {
      throw new Error(e.message);
    }
  };
  
  static handleValidationErrors = (req, res, next) => {
    const errors = expressValidator.validationResult(req);
    if (!errors.isEmpty()) {
      console.error(errors.array());
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
}