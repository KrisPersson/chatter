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
import relationshipRouter from "./routes/relationship.route.js";

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
  console.log("A user connected:", socket.id);
  socket.emit("chat-message", "A user connected!");

  socket.on("joinRoom", (data) => {
    socket.join(data.room);
    io.to(data.room).emit("chat-message", {
      textBody: `* ${data.username} entered the channel *`,
      senderUsername: data.username,
      sentAt: new Date(),
      channel: data.room,
    });
    console.log(`${data.username} joined room: ${data.room}`);
  });
  socket.on("leaveRoom", (data) => {
    socket.leave(data.room);
    io.to(data.room).emit("chat-message", {
      textBody: `* ${data.username} left the channel *`,
      senderUsername: data.username,
      sentAt: new Date(),
      channel: data.room,
    });
    console.log(`${data.username} left room: ${data.room}`);
  });

  socket.on("chat-message", (msg) => {
    io.to(msg.channel).emit("chat-message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/channel", channelRouter);
app.use("/api/relationship", relationshipRouter);

httpServer.listen(PORT, () => console.log("Connected to server"));
