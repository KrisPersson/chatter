import { z } from "zod";

const baseUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  password: z.string(),
});

export const signupInputSchema = baseUserSchema
  .extend({
    email: z.string().email(),
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

const userDbSchema = baseUserSchema.extend({
  email: z.string().email("Invalid email address"),
  id: z.string().uuid(),
  password: z.string(), // Hashed
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  displayName: z.string().optional()
});

export type UserDbSchema = z.infer<typeof userDbSchema>;
