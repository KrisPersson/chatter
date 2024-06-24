import { ChannelDb } from "../../database/channel.db.js";
import { RelationshipDb } from "../../database/relationship.db.js";
import { UserDb } from "../../database/user.db.js";
import { removeChannelFromAllMemberUsers } from "./utils.js";
import {
  TChannel,
  TChannelMember,
} from "../../schemas/channel/channel.schema.js";
import { TChannelMessage } from "../../schemas/message/message.schema.js";
import { v4 as uuidv4 } from "uuid";

type TPostChannelMessageToDbProps = {
  senderUsername: string;
  sentAt: Date;
  textBody: string;
  channel: string;
};

export async function postChannelMessageToDb({
  senderUsername,
  sentAt,
  textBody,
  channel,
}: TPostChannelMessageToDbProps) {
  const channelInDb = await ChannelDb.findOne({ name: channel });
  if (!channelInDb)
    throw new Error(
      "Could not find channel with this channelName in database.",
    );
  if (channelInDb.blockedUsers.includes(senderUsername))
    throw new Error("User has been banned from this channel by a moderator.");

  const newMessage: TChannelMessage = {
    id: uuidv4(),
    senderUsername,
    textBody,
    sentAt: new Date(sentAt),
  };
  channelInDb.messages.push(newMessage);
  await channelInDb.save();
  return;
}

export async function postDirectMessageToDb({
  senderUsername,
  sentAt,
  textBody,
  channel,
}: TPostChannelMessageToDbProps) {
  const relationshipInDb = await RelationshipDb.findOne({ id: channel });
  if (!relationshipInDb)
    throw new Error("Could not find relationship with this id in database.");
  const newMessage: TChannelMessage = {
    id: uuidv4(),
    senderUsername,
    textBody,
    sentAt: new Date(sentAt),
  };
  relationshipInDb.messages.push(newMessage);
  await relationshipInDb.save();
  return;
}
