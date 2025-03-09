import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
