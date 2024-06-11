import express from "express";
import mongoose from "mongoose";
import { Server } from "socket.io";
import { createServer } from "http";
import { config } from "dotenv";
import cors from "cors";
config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
import userRouter from "./routes/user.route.js";
import channelRouter from "./routes/channel.route.js";

mongoose.connect(process.env.DATABASE_URL as string);
const database = mongoose.connection;
database.on("error", (error) => console.log(error));
database.once("connected", () =>
  console.log("Database connection established"),
);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

io.on("connection", (socket) => {
  // ...
  console.log("A user connected:", socket.id);
  socket.emit("chat-message", "A user connected!");

  socket.on("chat-message", (msg) => {
    io.emit("chat-message", msg); // Broadcast the message to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/channel", channelRouter);

httpServer.listen(PORT, () => console.log("Connected to server"));
