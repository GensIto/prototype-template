import { honoApp } from "@/app/api/[...route]/app";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

export const GET = handle(honoApp);
export const POST = handle(honoApp);
export const PUT = handle(honoApp);
export const PATCH = handle(honoApp);
export const DELETE = handle(honoApp);
