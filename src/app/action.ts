"use server";

import { HelloApp } from "@/app/api/[...route]/hello";
import { hc } from "hono/client";

export async function sayHello(formData: FormData) {
  const client = hc<HelloApp>("http://localhost:3000/api/hello");
  const res = await client.index.$post({
    json: { name: formData.get("name") as string },
  });
  const data = await res.json();
  console.log(data);
}
