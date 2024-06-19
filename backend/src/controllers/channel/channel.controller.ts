import { Request, Response } from "express";
import {
  createChannel,
  joinChannel,
  deleteChannel,
  leaveChannel,
  getAllChannels,
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

export async function deleteChannelCtrl(request: Request, response: Response) {
  const token = request.headers.authorization?.replace("Bearer ", "");
  const { channelName } = request.body;

  try {
    const username = extractFromJwtPayload(token as string, "username");
    await deleteChannel(username, channelName);
    const result = {
      success: true,
      message: "Successfully deleted channel.",
    };
    response.json(result);
  } catch (error) {
    const err = error as Error;
    response.json({ success: false, message: err.message });
  }
}

export async function getChannelsCtrl(request: Request, response: Response) {
  try {
    const channelsInDb = await getAllChannels();
    const mappedChans = channelsInDb.map((chan) => {
      const { founderUsername, name, members } = chan;
      return { founder: founderUsername, name, numMembers: members.length };
    });
    response.json({
      success: true,
      channels: mappedChans,
    });
  } catch (error) {
    const err = error as Error;
    response.status(500).json({ success: false, message: err.message });
  }
}

export async function leaveChannelCtrl(request: Request, response: Response) {
  const token = request.headers.authorization?.replace("Bearer ", "");
  const { channelName } = request.body;

  try {
    const username = extractFromJwtPayload(token as string, "username");
    await leaveChannel(channelName, username);
    const result = {
      success: true,
      message: "Successfully left channel.",
    };
    response.json(result);
  } catch (error) {
    const err = error as Error;
    response.json({ success: false, message: err.message });
  }
}
