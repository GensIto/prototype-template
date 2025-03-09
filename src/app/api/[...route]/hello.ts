import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { helloSchema } from "@/shared/schema/hello";

export const helloApp = new Hono()
  .get("/", (c) => {
    return c.json({
      message: "Hello world!",
    });
  })
  .post("/", zValidator("json", helloSchema), (c) => {
    const { name } = c.req.valid("json");
    return c.json({
      message: `Hello ${name}!`,
    });
  });

export type HelloApp = typeof helloApp;
