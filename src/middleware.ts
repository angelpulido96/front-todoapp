import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl

  const isLoged = request.cookies.get('isLoged')?.value

  if (pathname === '/tasks' && !isLoged || pathname === '/tasks' && isLoged === 'false') {
    return NextResponse.redirect(`${origin}`)
  }

  if (pathname == '/' && isLoged === 'true') {
    return NextResponse.redirect(`${origin}/tasks`)
  }

  if (pathname === '/login') {
  }

  return NextResponse.next()
}