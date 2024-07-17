import express from 'express';
import connectDB from './db.js';
import cors from 'cors';
import dotenv from 'dotenv';


// const app = express();

// // Connect Database
// connectDB();

// // Init Middleware
// app.use(express.json());
// app.use(cors());

// // Define Routes
// app.use('/api/llms', require('./routes/llms'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// dotenv.config();

export default class Server { 
  #app;
  #port;
  #router;
  #server;
  #allowedOrigin
  #corsOptions;
  
  constructor(port, router, allowedOrigin) {
    this.#app = express();
    this.#port = port;
    this.#server = null;
    this.#router = router;
    this.#allowedOrigin = allowedOrigin;
    this.#corsOptions = {
      origin: this.#allowedOrigin, //allow only the react front end to be the origin
      credentials: true, //allow for the use of the auth tokens
      methods: ['GET', 'DELETE', 'POST', 'PUT'], //allowed methods
      allowedHeaders: ['Content-Type', 'Authorization', 'x-userprofile'], //allowed headers
    };
  }
  
  getApp = () => {
    return this.#app;
  };
  
  start = () => {
    this.#app.use(cors(this.#corsOptions));
    this.#app.use(express.json());
    this.#router.getRouter().forEach((router) => {
      this.#app.use(router.getRouteStartPoint(), router.getRouter());
    });
    this.#server = this.#app.listen(this.#port, () => {
      console.log(`Server is listening on port:${this.#port}`);
    });
  };

  close = () => {
    this.#server.close();
  };
}