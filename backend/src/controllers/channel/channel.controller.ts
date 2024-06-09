import { Request, Response } from "express";
import {
  createChannel,
  joinChannel,
} from "../../model/channel/channel.model.js";
import { extractFromJwtPayload } from "../../utils/jwt.js";

export async function createChannelCtrl(request: Request, response: Response) {
  const token = request.headers.authorization?.replace("Bearer ", "");
  const { name } = request.body;

  try {
    if (!token) {
      response
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const founderUsername = extractFromJwtPayload(token as string, "username");
    const newChannel = await createChannel(founderUsername, name);
    const result = {
      success: true,
      message: "Channel successfully created.",
      channelId: newChannel.id,
      channelName: newChannel.name,
    };
    response.json(result);
  } catch (error) {
    const err = error as Error;
    response.json({ success: false, message: err.message });
  }
}

export async function joinChannelCtrl(request: Request, response: Response) {
  const token = request.headers.authorization?.replace("Bearer ", "");
  const { channelName } = request.body;

  try {
    if (!token) {
      response
        .status(401)
        .json({ success: false, message: "No token provided" });
    }

    const username = extractFromJwtPayload(token as string, "username");
    await joinChannel(channelName, username);
    const result = {
      success: true,
      message: "Successfully joined channel.",
    };
    response.json(result);
  } catch (error) {
    const err = error as Error;
    response.json({ success: false, message: err.message });
  }
}
