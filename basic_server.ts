import { serve } from "https://deno.land/std@0.60.0/http/server.ts";
const s = serve({ port: 5500 });
console.log("http://localhost:5500/");
for await (const req of s) {
  req.respond({ body: "Welcome to Crashy Code\n" });
}