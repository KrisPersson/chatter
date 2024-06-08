import { z } from "zod";
import { baseMessageSchema } from "../message/message.schema.js";

export const baseChannelSchema = z.object({
  id: z.string().uuid(),
  founderId: z.string().uuid(),
  name: z.string(),
});

export const userInputCreateChannelSchema = z.object({
  name: z.string().min(3, "Channel name must be at least 3 characters long."),
});

export const channelDbSchema = baseChannelSchema.extend({
  createdAt: z.date(),
  messages: z.array(baseMessageSchema),
  members: z.array(z.string()),
});
export type TChannel = z.infer<typeof channelDbSchema>;

export const channelMember = z.object({
  userId: z.string().uuid(),
  isOwner: z.boolean(),
  isModerator: z.boolean(),
});

export type TChannelMember = z.infer<typeof channelMember>;
