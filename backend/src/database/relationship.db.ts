import mongoose from "mongoose";
import { ChannelMessageSchema } from "./message.db.js";
const RelationshipSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  messages: {
    required: true,
    type: [ChannelMessageSchema],
    default: [],
  },
  usernames: {
    required: true,
    type: [String],
    default: [],
  },
});

export const RelationshipDb = mongoose.model(
  "Relationship",
  RelationshipSchema,
);
