import { z } from "zod";

const baseUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string(),
});

export const signupInputSchema = baseUserSchema
  .extend({
    password: z
      .string()
      .regex(
        /^(?=.*\d).{8,}$/,
        "Password must be at least 8 characters long and include at least one number",
      ),
    repeatPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords don't match",
    path: ["repeatPassword"],
  });

export const loginInputSchema = baseUserSchema.extend({
  password: z
    .string()
    .regex(
      /^(?=.*\d).{8,}$/,
      "Password must be at least 8 characters long and include at least one number",
    ),
});

export const updateOnlineStatusSchema = z.object({
  status: z
    .string()
    .min(4, "Status must be at least 4 chars long")
    .max(7, "Status must be at most 7 chars long"),
});

const userDbSchema = baseUserSchema.extend({
  id: z.string().uuid(),
  password: z.string(), // Hashed
  createdAt: z.date(),
  channels: z.array(z.string()),
  updatedAt: z.date().optional(),
  displayName: z.string().optional(),
});

export type UserDbSchema = z.infer<typeof userDbSchema>;
