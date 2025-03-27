import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { prisma } from "@/app/lib/prisma";
import { createPostSchema } from "@/shared/posts";

export const postsApp = new Hono()
  .get("/posts", async (c) => {
    try {
      const posts = await prisma.post.findMany();
      return c.json({ posts });
    } catch (error) {
      console.error("Error fetching posts:", error);
      return c.json({ error: "Failed to fetch posts" }, 500);
    }
  })
  .post("/posts", zValidator("json", createPostSchema), async (c) => {
    try {
      const { title, content, published } = c.req.valid("json");

      const post = await prisma.post.create({
        data: {
          title,
          content,
          published: published ?? false,
        },
      });

      return c.json({ post }, 201);
    } catch (error) {
      console.error("Error creating post:", error);
      return c.json({ error: "Failed to create post" }, 500);
    }
  });

export type PostsApp = typeof postsApp;
