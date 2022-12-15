import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let ip = request.headers.get("x-forwarded-for");
  fetch(`https://itshosein.com/api/check-ip?u=${request.url}&ip=${ip}`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!_next/static|icon|manifest.json|favicon.ico).*)"],
};
