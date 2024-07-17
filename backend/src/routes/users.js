import { Router } from "express";
import UserController from "../controllers/UserController.js";
// import UserValidator from "../middleware/User.validator.js";
// import Jwt from "../middleware/Jwt.authenticator.js";

export default class UserRoutes {
  #controller;
  #router;
  #routeStartPoint;

  constructor(controller = new UserController(), routeStartPoint = "/") {
    this.#controller = controller;
    this.#routeStartPoint = routeStartPoint;
    this.#router = Router();
    this.#initialiseRoutes();
  }

  #initialiseRoutes = () => {
    // this.#router.post(
    //   "/login",
    //   this.#controller.loginUser
    // );
    // this.#router.post(
    //   "/sign-up",
    //   // UserValidator.validate(),
    //   // UserValidator.checkDuplicateEmail,
    //   this.#controller.addUser
    // );
    // this.#router.get(
    //   "/members/:id",
    //   this.#controller.getUser
    // );
    // this.#router.put(
    //   "/members/:id/edit",
    //   // Jwt.verifyToken,
    //   // ProfileValidator.validate(),
    //   this.#controller.editUser
    // );
  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };
}