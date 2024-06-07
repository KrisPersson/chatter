import { z } from "zod";
import { privateMessageSchema } from "../message/message.schema";

export const relationshipSchema = z.object({
  id: z.string(),
  messages: z.array(privateMessageSchema),
});
