import express from "express";
import "express-async-errors";
import cors from "cors";
import RouteNotFoundError from "./errors/route-not-found-error.js";
import errorHandler from "./middleware/error-handler.js";

// Import Routes
import { carsRouter } from "./routes/cars.route.js";
import { userRouter } from "./routes/user.route.js";

const app = express();
app.use(express.json());
app.use(cors());

// Defines routes
app.use("/api/cars", carsRouter);
app.use("/api/users", userRouter);

app.use("*", () => {
  throw new RouteNotFoundError("Route Not found");
});

app.use(errorHandler);

export { app };
