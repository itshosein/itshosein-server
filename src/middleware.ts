// middleware.ts
import type { NextRequest } from "next/server";
import fs from "fs";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let forwarded = request.headers.get("x-forwarded-for");

  const ip = forwarded ? forwarded.split(/, /)[0] : request.ip;
  fs.appendFile(
    "ip.text",
    `${ip} \t ${Date.now().toString()} \t ${request.nextUrl} \n`,
    (e) => {
      if (e) {
        console.log(e);
      }
    }
  );
}

export const config = {
  matcher: "/",
};
