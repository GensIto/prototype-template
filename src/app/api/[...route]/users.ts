import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { prisma } from "@/app/lib/prisma";
import { createUserSchema } from "@/shared/users";

export const usersApp = new Hono()
  .get("/users", async (c) => {
    try {
      const users = await prisma.user.findMany();
      return c.json({ users });
    } catch (error) {
      console.error("Error fetching users:", error);
      return c.json({ error: "Failed to fetch users" }, 500);
    }
  })
  .post("/users", zValidator("json", createUserSchema), async (c) => {
    try {
      const { email, name } = c.req.valid("json");

      const user = await prisma.user.create({
        data: {
          email,
          name,
        },
      });

      return c.json({ user }, 201);
    } catch (error) {
      console.error("Error creating user:", error);
      return c.json({ error: "Failed to create user" }, 500);
    }
  });

export type UsersApp = typeof usersApp;
