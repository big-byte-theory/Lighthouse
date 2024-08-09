
import { Router } from "express";
import LlmController from "../controllers/LlmController.js";
import Jwt from "../middleware/JwtAuthenticator.js";

export default class LlmRoutes {
  #controller;
  #router;
  #routeStartPoint;

  constructor(controller = new LlmController(), routeStartPoint = "/") {
    this.#controller = controller;
    this.#routeStartPoint = routeStartPoint;
    this.#router = Router();
    this.#initialiseRoutes();
  }

  #initialiseRoutes = () => {
    // @route   GET api/llms
    // @desc    Get all LLMs
    this.#router.get(
      "/catalogue",
      this.#controller.getAllLlms
    );

    // @route   GET api/llms/:id
    // @desc    Get LLM by ID
    this.#router.get(
      "/llm/:id",
      this.#controller.getLlm
    );

    // @route   POST api/llms
    // @desc    Create a new LLM
    this.#router.post(
      "/llm/add",
      Jwt.verifyAdmin,
      this.#controller.addLlm
    );

    // @route   PUT api/llms/:id
    // @desc    Update LLM by ID
    this.#router.put(
      "/llm/:id",
      Jwt.verifyAdmin,
      this.#controller.updateLlm
    );

    // @route   DELETE api/llms/:id
    // @desc    Delete LLM by ID
    this.#router.delete(
      "/llm/:id",
      Jwt.verifyAdmin,
      this.#controller.deleteLlm
    );
  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };
}