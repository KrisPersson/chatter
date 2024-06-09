import { z } from "zod";

export const baseMessageSchema = z.object({
  id: z.string().uuid(),
  senderUsername: z.string(),
  sentAt: z.date(),
  textBody: z.string(),
});

export type TChannelMessage = z.infer<typeof baseMessageSchema>;

export const privateMessageSchema = baseMessageSchema.extend({
  isRead: z.boolean().default(false),
});
