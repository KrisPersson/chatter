import mongoose from "mongoose";

export const ChannelMessageSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  senderUsername: {
    required: true,
    type: String,
  },
  textBody: {
    required: true,
    type: String,
  },
  sentAt: {
    required: true,
    type: String, // Date
  },
});

export const Message = mongoose.model("Message", ChannelMessageSchema);
