import { z } from "zod";
import { baseMessageSchema } from "../message/message.schema.js";

export const baseChannelSchema = z.object({
  id: z.string().uuid(),
  founderUsername: z.string(),
  name: z.string(),
});

export const userInputCreateChannelSchema = z.object({
  name: z.string().min(3, "Channel name must be at least 3 characters long."),
});

export const userInputJoinChannelSchema = z.object({
  channelName: z.string(),
});

export const userInputDeleteChannelSchema = z.object({
  channelName: z.string(),
});

export const channelMember = z.object({
  username: z.string(),
  isOwner: z.boolean(),
  isModerator: z.boolean(),
});

export const channelDbSchema = baseChannelSchema.extend({
  createdAt: z.date(),
  messages: z.array(baseMessageSchema),
  members: z.array(channelMember),
});
export type TChannel = z.infer<typeof channelDbSchema>;

export type TChannelMember = z.infer<typeof channelMember>;
