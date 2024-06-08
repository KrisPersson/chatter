import { Request, Response } from "express";
import { createChannel } from "../../model/channel/channel.model.js"
import { extractIdFromJwtPayload } from "../../utils/jwt.js"

export async function createChannelCtrl(request: Request, response: Response) {
  const { name } = request.body;
  const token = request.headers.authorization?.replace("Bearer ", "");
  
  try {
    if (!token) {
      response.status(401).json({ success: false, message: "No token provided" });
    }
    
    const founderId = extractIdFromJwtPayload(token as string)
    const newChannelId: string = await createChannel(founderId, name)
    const result = {
      success: true,
      message: "Channel successfully created.",
      channelId: newChannelId
    };
    response.json(result);
  } catch (error) {
    const err = error as Error;
    response.json({ success: false, message: err.message });
  }
}
