import { sayHello } from "@/app/action";
import type { HelloApp } from "@/app/api/[...route]/hello";
import { hc } from "hono/client";

export default async function Home() {
  const client = hc<HelloApp>(`${process.env.NEXT_PUBLIC_API_URL}/hello`);
  const res = await client.index.$get();
  const data = await res.json();

  return (
    <div>
      <p>{data.message}</p>
      <form action={sayHello}>
        <input type='text' name='name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
