import { Router } from "express";
import UserController from "../controllers/UserController.js";
import UserAuthenticator from "../middleware/UserAuthenticator.js";
import Jwt from "../middleware/JwtAuthenticator.js";

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
    this.#router.post(
      "/login",
      this.#controller.loginUser
    );
    this.#router.post(
      "/sign-up",
      UserAuthenticator.validate(),
      UserAuthenticator.checkDuplicateEmail,
      this.#controller.addUser
    );
    this.#router.get(
      "/user/:id",
      Jwt.verifyToken,
      this.#controller.getUser
    );
    // this.#router.put(
    //   "/user/:id",
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