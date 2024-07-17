import Config from "./src/config/config.js";
import Database from "./src/config/db.js";
import LlmRoutes from "./src/routes/llms.js";
import Router from "./src/routes/router.js";
import UserRoutes from "./src/routes/users.js";
import Server from "./src/config/server.js";

Config.load();
const { PORT, MONGO_URI, ALLOWED_ORIGIN } = process.env;

const router = new Router();
const llmRoutes = new LlmRoutes();
const userRoutes = new UserRoutes();
router.addRouter(llmRoutes);
router.addRouter(userRoutes);
const server = new Server(PORT, router, ALLOWED_ORIGIN);
const database = new Database(MONGO_URI);

server.start();
await database.connect();