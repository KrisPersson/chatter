import { ChannelDb } from "../../database/channel.db.js";
import { TChannel } from "../../schemas/channel/channel.schema.js";
import { v4 as uuidv4 } from "uuid";

export async function createChannel(founderId: string, name: string) {
  const channelNameExist = await ChannelDb.findOne({ name });
  if (channelNameExist) {
    throw new Error("Channel name is already in use. Try a different one.");
  } else {
    const randomId = uuidv4();
    const channelObj: TChannel = {
      id: randomId,
      founderId,
      name,
      createdAt: new Date(),
      messages: [],
      members: [],
    };

    const result = await ChannelDb.create(channelObj);

    return result.id;
  }
}
