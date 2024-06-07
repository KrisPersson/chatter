import { z } from "zod";
import { baseMessageSchema } from "../message/message.schema";

export const baseChannelSchema = z.object({
    id: z.string().uuid(),
    founderId: z.string().uuid(),
    name: z.string()
})

export  const channelDbSchema = baseChannelSchema.extend({
    timeFounded: z.date(),
    messages: z.array(baseMessageSchema)
})