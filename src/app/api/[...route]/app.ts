import { helloApp } from "@/app/api/[...route]/hello";
import { postsApp } from "@/app/api/[...route]/posts";
import { usersApp } from "@/app/api/[...route]/users";
import { Hono } from "hono";
import { logger } from "hono/logger";

export const honoApp = new Hono().basePath("/api");

honoApp.use("*", logger());

honoApp.route("/hello", helloApp);
honoApp.route("/users", usersApp);
honoApp.route("/posts", postsApp);
