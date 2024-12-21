import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Check if the URL is exactly '/dash'
  if (url.pathname === '/pages/dashDoc'|| url.pathname === '/pages/Dashboard' || url.pathname === '/Dashboard' ) {
    url.pathname = '/pages/dashDoc/notification'; // Redirect to '/dash/notification'
    return NextResponse.redirect(url);
  }
 

  if(url.pathname === '/pages/dashPat'){
      url.pathname = '/pages/dashPat/search'; // Redirect to '/dash/notification'
      return NextResponse.redirect(url);
    }

  if(url.pathname === '/login' || url.pathname === '/signup' ){
    url.pathname = '/pages/auth'+ url.pathname; // Redirect to '/dash/notification'
    return NextResponse.redirect(url);
  }
    if(url.pathname === '/services' || url.pathname === '/services' )
      {
        url.pathname = '/pages'+ url.pathname; // Redirect to '/dash/notification'
        return NextResponse.redirect(url);
      }




  return NextResponse.next(); // Allow other routes to proceed as normal
}


