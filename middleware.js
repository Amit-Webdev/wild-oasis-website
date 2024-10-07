/*import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  return NextResponse.redirect(new URL("/about", request.url));
}*/

// the auth function can also be used/served as middleware function
import { auth } from "@/app/_lib/Auth";
export const middleware = auth;

// here, matcher will only apply to /account route and hence will redirect all unautherized visitors to /login page
export const config = {
  matcher: ["/account"],
};

// Once any user visits /account route the authorized() callback function in Auth.js will run
