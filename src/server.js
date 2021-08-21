import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({ path: "./src/config/config.env" });

const PORT = process.env.PORT || 5000;

const start = async () => {
  if (!process.env.MONGO_URI) throw new Error("Mongo uri not provided");
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Connected to mongo db...");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {}
};

start();
