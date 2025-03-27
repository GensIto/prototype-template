import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
  published: z.boolean().optional(),
});

export type CreatePostSchema = z.infer<typeof createPostSchema>;
