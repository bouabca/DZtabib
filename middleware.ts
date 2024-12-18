import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Check if the URL is exactly '/dash'
  if (url.pathname === '/pages/dash') {
    url.pathname = '/pages/dash/notification'; // Redirect to '/dash/notification'
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Allow other routes to proceed as normal
}
