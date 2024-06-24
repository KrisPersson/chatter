import { ChannelDb } from "../../database/channel.db.js";
import { UserDb } from "../../database/user.db.js";
import { removeChannelFromAllMemberUsers } from "./utils.js";
import {
  TChannel,
  TChannelMember,
} from "../../schemas/channel/channel.schema.js";
import { v4 as uuidv4 } from "uuid";

export async function createChannel(founderUsername: string, name: string) {
  const channelNameExists = await ChannelDb.findOne({ name });
  const userInDb = await UserDb.findOne({ username: founderUsername });

  if (channelNameExists) {
    throw new Error("Channel name is already in use. Try a different one.");
  } else if (!userInDb) {
    throw new Error("Could not find user in database.");
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
    userInDb.channels.push(name);
    await userInDb.save();
    return result;
  }
}

export async function joinChannel(channelName: string, username: string) {
  const channelInDb = await ChannelDb.findOne({ name: channelName });
  const userInDb = await UserDb.findOne({ username });
  if (!channelInDb)
    throw new Error(
      "Could not find channel with this channelName in database.",
    );
  if (channelInDb.blockedUsers.includes(username))
    throw new Error("User has been banned from this channel by a moderator.");
  channelInDb.members.forEach((member) => {
    if (member.username === username)
      throw new Error("User is already a member of this channel.");
  });
  if (!userInDb) throw new Error("User could not be found.");
  if (userInDb.channels.includes(channelName))
    throw new Error(
      "Channel already on user list of member channels, but not on channel.",
    );
  const newMember: TChannelMember = {
    username,
    isOwner: false,
    isModerator: false,
  };
  channelInDb.members.push(newMember);
  userInDb.channels.push(channelInDb.name);
  await channelInDb.save();
  await userInDb.save();
  return;
}

export async function getAllChannels() {
  const channels = await ChannelDb.find();

  return channels;
}

export async function getChannel(name: string, username: string) {
  const channel = await ChannelDb.findOne({ name });
  if (!channel) throw new Error("Could not find channel in database.");
  const members = channel.members.map((member) => member.username);
  if (!members.includes(username))
    throw new Error("User is not a member of this channel.");
  return channel;
}

export async function deleteChannel(founderUsername: string, name: string) {
  const channelInDb = await ChannelDb.findOne({ founderUsername, name });
  if (!channelInDb) {
    throw new Error("Channel could not be found in database.");
  }
  const { deletedCount } = await ChannelDb.deleteOne({ founderUsername, name });
  if (deletedCount < 1) {
    throw new Error("Could not delete channel.");
  }
  const usernames = channelInDb.members.map((member) => member.username);
  const removeFromUsers = await removeChannelFromAllMemberUsers(
    name,
    usernames,
  );

  return true;
}

export async function leaveChannel(channelName: string, username: string) {
  const userInDb = await UserDb.findOne({ username });
  if (!userInDb) {
    throw new Error("User could not be found in database.");
  }
  const channelInDb = await ChannelDb.findOne({ name: channelName });
  if (!channelInDb) {
    throw new Error("Channel could not be found in database.");
  }
  const members = channelInDb.members.map((member) => member.username);
  if (!members.includes(username)) {
    throw new Error("User is not a member of this channel.");
  }
  if (channelInDb.founderUsername === username) {
    throw new Error("User is founder of channel and can not leave.");
  }

  channelInDb.members.splice(members.indexOf(username), 1);
  userInDb.channels.splice(userInDb.channels.indexOf(channelName), 1);
  await channelInDb.save();
  await userInDb.save();
  return true;
}
