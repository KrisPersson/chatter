import mongoose from "mongoose";

const userSignUpSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  createdAt: {
    required: true,
    type: String,
    default: () => {
      return new Date().toLocaleString();
    },
  },
  channels: {
    required: true,
    type: [String], // channelName
    default: [],
  },
  updatedAt: {
    required: false,
    type: String,
  },
  displayName: {
    required: false,
    type: String,
  },
  id: {
    required: true,
    type: String,
  },
});

userSignUpSchema.pre("save", function (next) {
  if (!this.displayName) {
    this.displayName = this.username;
  }
  next();
});

export const UserDb = mongoose.model("User", userSignUpSchema);
