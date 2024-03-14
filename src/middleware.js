export { default } from "next-auth/middleware"

// url apapun setelah users akan deafult diarahkan ke login 
export const config = { matcher: ["/users/:path*"] }