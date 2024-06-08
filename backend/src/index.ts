import express from "express";
import { config } from "dotenv";
config();
const app = express();
const PORT = process.env.PORT || 8000;

import userRouter from "./routes/user.route.js";
import channelRouter from "./routes/channel.route.js";

import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL as string);
const database = mongoose.connection;
database.on("error", (error) => console.log(error));
database.once("connected", () =>
  console.log("Database connection established"),
);

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/channel", channelRouter);

app.listen(PORT, () => {
  console.log("Started server at:" + PORT);
});
