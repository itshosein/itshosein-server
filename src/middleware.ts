import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  fetch(`https://itshosein.com/api/check-ip?u=${request.url}`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"],
};
