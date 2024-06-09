import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";
import { createServer } from "http";
import { config } from "dotenv";
config();
const app = express();
const PORT = process.env.PORT || 8000;

import userRouter from "./routes/user.route.js";
import channelRouter from "./routes/channel.route.js";

mongoose.connect(process.env.DATABASE_URL as string);
const database = mongoose.connection;
database.on("error", (error) => console.log(error));
database.once("connected", () =>
  console.log("Database connection established"),
);

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  // ...
  console.log("CONNECTED TO SOCKET")
  socket.emit('Connected! This was sent by socket.emit')
});

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/channel", channelRouter);

httpServer.listen(PORT);
