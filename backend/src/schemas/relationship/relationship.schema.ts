import { z } from "zod";
import { privateMessageSchema } from "../message/message.schema.js";

export const relationshipSchema = z.object({
  id: z.string(),
  messages: z.array(privateMessageSchema),
  usernames: z.array(z.string()),
});

export const relationshipCreateUserInputSchema = z.object({
  otherParties: z.array(z.string()).nonempty(),
});
