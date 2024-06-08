import { ChannelDb } from "../../database/channel.db.js";
import { TChannel, TChannelMember } from "../../schemas/channel/channel.schema.js";
import { v4 as uuidv4 } from "uuid";

export async function createChannel(founderUsername: string, name: string) {
  const channelNameExist = await ChannelDb.findOne({ name });
  if (channelNameExist) {
    throw new Error("Channel name is already in use. Try a different one.");
  } else {
    const randomId = uuidv4();
    const channelObj: TChannel = {
      id: randomId,
      founderUsername,
      name,
      createdAt: new Date(),
      messages: [],
      members: [],
    };

    const result = await ChannelDb.create(channelObj);

    return result;
  }
}

export async function joinChannel(channelName: string, username: string) {
  const channelInDb = await ChannelDb.findOne({ name: channelName });
  if (!channelInDb) {
    throw new Error("Could not find channel with this ID in database.")
  }
  if (channelInDb.blockedUsers.includes(username)) {
    throw new Error("User has been banned from this channel by a moderator.")
  }
  channelInDb.members.forEach(member => {
    if (member.username === username) {
      throw new Error("User is already a member of this channel.")
    }
  })
  
  const newMember: TChannelMember = { username, isOwner: false, isModerator: false }
  channelInDb.members.push(newMember)
  return await channelInDb.save()
}
