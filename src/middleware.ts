import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { deleteCookie } from 'cookies-next';

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl

  const response = NextResponse.next()

  const auth = !!request.cookies.get('authorization')?.value

  if (pathname === '/tasks' && !auth) {
    return NextResponse.redirect(`${origin}`)
  }

  if (pathname == '/' && auth) {
    return NextResponse.redirect(`${origin}/tasks`)
  }

  if (pathname === '/login') {
    return NextResponse.redirect(`${origin}/`)
  }

  return response
}