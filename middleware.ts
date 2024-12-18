import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Check if the URL is exactly '/dash'
  if (url.pathname === '/pages/dashDoc') {
    url.pathname = '/pages/dashDoc/notification'; // Redirect to '/dash/notification'
    return NextResponse.redirect(url);
  }
  else 
  {
    if(url.pathname === '/pages/Dashboard'){
        url.pathname = '/pages/dashDoc/notification'; // Redirect to '/dash/notification'
        return NextResponse.redirect(url);
      }
  }
  if (url.pathname === '/pages/dashPat') {
    url.pathname = '/pages/dashPat/search'; // Redirect to '/dash/notification'
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // Allow other routes to proceed as normal
}


