import mongoose from "mongoose";
import { TChannelMember } from "../schemas/channel/channel.schema.js";
import { v4 as uuidv4 } from "uuid";

const createNewChannelSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
    default: () => {
      return uuidv4();
    },
  },
  founderUsername: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  messages: {
    required: true,
    type: [
      {
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
      },
    ],
    default: [],
  },
  members: {
    required: true,
    type: [
      {
        username: {
          required: true,
          type: String,
        },
        isOwner: {
          required: true,
          type: Boolean,
          default: false,
        },
        isModerator: {
          required: true,
          type: Boolean,
          default: false,
        },
      },
    ],
    default: [],
  },
  blockedUsers: {
    required: true,
    type: [String], // USERID
    default: [],
  },
  createdAt: {
    required: true,
    type: String,
    default: () => {
      return new Date().toLocaleString();
    },
  },
});

createNewChannelSchema.pre("save", function (next) {
  if (this.members.length < 1) {
    const firstMember: TChannelMember = {
      username: this.founderUsername,
      isOwner: true,
      isModerator: true,
    };
    this.members.push(firstMember);
  }
  next();
});

export const ChannelDb = mongoose.model("Channel", createNewChannelSchema);
