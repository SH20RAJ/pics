export { auth as middleware } from "@/auth"


// export const runtime = 'experimental-edge'

// export const config = {
//     runtime: 'edge',
//   };
  

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  };