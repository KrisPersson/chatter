import mongoose from "mongoose";

const ChannelMessageSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  senderId: {
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
