export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favotites,",
    "/about/:path*",
    "/become-a-host/:path*",
    "/payment:path*",
  ],
};
