import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname, origin } = request.nextUrl

    if (pathname === '/login') {
        return NextResponse.redirect(`${origin}`)
    }

    return NextResponse.next()
}