import { NextResponse, NextRequest } from "next/server";
import { API_URL } from "./services/config";


export async function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const subdomain = host.split(".")[0];

  if (host === "localhost:3000") {
    return NextResponse.next();
  }

  const res = await fetch(`${API_URL}/resolve-domain?host=${subdomain}`);
  const data = res.ok ? await res.json() : null;
  const instituteId = data?.domain?.instituteId ?? null;

  if (!instituteId) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  }

  const response = NextResponse.rewrite(req.nextUrl);
  // Set cookie accessible on client
  response.cookies.set({
    name: "instituteId",
    value: instituteId,
    path: "/", 
    httpOnly: false, // make it accessible from client-side JS
  });
  return response;
}


export const config = {
  matcher: [
    "/((?!api|_next|fonts|.*\\.(?:ico|jpg|jpeg|png|gif|svg|ttf|woff|woff2|eot|css|js)).*)",
  ],
};



