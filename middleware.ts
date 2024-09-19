import { NextRequest, NextResponse } from "next/server";
export { default } from 'next-auth/middleware'

// export function middleware (request:NextRequest) {
//     return NextResponse.redirect(new URL('/new-page', request.url))
// }

//or
// export default middleware;

export const config ={
    //* *: zero or more
    //* +: one or more
    //* ?: zero or more
    matcher: [
        '/dashboard/:path*'
    ]
}