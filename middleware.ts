import { NextRequest, NextResponse, userAgentFromString } from 'next/server';


let RouteProtection = true;

async function getUserType(accessToken: string) {

  

  const patientResponse = await fetch('https://dztabib.onrender.com/medical/patient/me', {
    method: 'GET',
    headers: {
      'Authorization': `JWT ${accessToken}`,
    },
  });

  if (patientResponse.status === 200) {
    return 'patient';
  }

  const doctorResponse = await fetch('https://dztabib.onrender.com/medical/doctor/me', {
    method: 'GET',
    headers: {
      'Authorization': `JWT ${accessToken}`,
    },
  });

  if (doctorResponse.status === 200) {
    return 'doctor';
  }

  return null; // If neither doctor nor patient is found
}

async function verifyAccessToken(accessToken: string) {
  const response = await fetch('https://dztabib.onrender.com/auth/jwt/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: accessToken }),
  });

  return response.status === 200;
}

async function refreshAccessToken(refreshToken: string) {
  const response = await fetch('https://dztabib.onrender.com/auth/jwt/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh: refreshToken }),
  });

  if (response.status === 200) {
    const data = await response.json();
    return data.access;  // Return the new access token
  }
  return null;
}

export async function middleware(request: NextRequest) {
  console.time('middlewareExecutionTime');


  const url = request.nextUrl.clone();


  if (url.pathname.startsWith('/pages/api')) {
    return NextResponse.next(); // Skip middleware for API routes
  }


  console.log(request.nextUrl.pathname)


  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  
 



  if(RouteProtection){

    // If the accessToken and refreshToken are missing, redirect to login
  if (!accessToken || !refreshToken) {
    
    if (url.pathname.startsWith('/pages/dashDoc') || url.pathname === '/pages/Dashboard' || url.pathname === '/Dashboard') {
      url.pathname = '/pages/auth/login'; // Redirect to login page
      return NextResponse.redirect(url);
    }
  
    if (url.pathname.startsWith('/pages/dashPat')) {
      url.pathname = '/pages/auth/login'; // Redirect to login page
      return NextResponse.redirect(url);
    }



  }
  else{
    const userType = await getUserType(accessToken);

    console.log(userType)
  
    const isAccessTokenValid = await verifyAccessToken(accessToken);

    if (!isAccessTokenValid) {
      // If the access token is expired, attempt to refresh it
      const newAccessToken = await refreshAccessToken(refreshToken);
  
      if (newAccessToken) {
        // Set the new access token in cookies and proceed
        const response = NextResponse.next();
        response.cookies.set('accessToken', newAccessToken);
        return response;
      } else {
        // If the refresh token is invalid, redirect to login
        url.pathname = '/pages/auth/login'; // Redirect to login
        return NextResponse.redirect(url);
      }
    }
  
  
  
    if (url.pathname === '/pages/Dashboard' || url.pathname === '/Dashboard') {
      if(userType == 'patient')
      {
        url.pathname = '/pages/dashPat/search';
      }else{
        if( userType == 'doctor')
        { url.pathname = '/pages/dashDoc/notification';}
          else{
            url.pathname = '/pages/auth/login ';
          }
      }
  
      return NextResponse.redirect(url);
    }


    if (url.pathname === '/pages/dashDoc' ) {
      url.pathname = '/pages/dashDoc/notification'; // Redirect to '/dash/notification'
      return NextResponse.redirect(url);
    }

    if (url.pathname === '/pages/dashPat') {
      url.pathname = '/pages/dashPat/search'; // Redirect to '/dash/search'
      return NextResponse.redirect(url);
    }



    // mobile redirecting


    if (url.pathname === '/notification' || url.pathname === '/appointments' || url.pathname === '/historique' || url.pathname === '/profile' || url.pathname === '/search' || url.pathname === '/notification' || url.pathname === '/chat') {
      

      if(userType == 'patient')
        {
          url.pathname = '/pages/dashDoc' + url.pathname; // Redirect to '/pages/dashDoc/notification'
        }else{
          if( userType == 'doctor')
          {     url.pathname = '/pages/dashPat' + url.pathname;  }
            else{
              url.pathname = '/pages/auth/login ';
            }
        }
    
      

      return NextResponse.redirect(url);
    }






  }



  }

  else{
  const userType = 'patient'

    if (url.pathname === '/pages/Dashboard' || url.pathname === '/Dashboard') {
      if(userType == 'patient')
      {
        url.pathname = '/pages/dashPat/search';
      }else{
        if( userType == 'doctor')
        { url.pathname = '/pages/dashDoc/notification';}
          else{
            url.pathname = '/pages/auth/login ';
          }
      }
  
      return NextResponse.redirect(url);
    }



    if (url.pathname === '/pages/dashDoc' ) {
      url.pathname = '/pages/dashDoc/notification'; // Redirect to '/dash/notification'
      return NextResponse.redirect(url);
    }

    if (url.pathname === '/pages/dashPat') {
      url.pathname = '/pages/dashPat/search'; // Redirect to '/dash/search'
      return NextResponse.redirect(url);
    }



    // mobile redirecting

  
    if (url.pathname === '/notification' || url.pathname === '/appointments' || url.pathname === '/historique' || url.pathname === '/profile' || url.pathname === '/search' || url.pathname === '/notification' || url.pathname === '/chat') {
      

      if(userType == 'patient')
        {
          url.pathname = '/pages/dashDoc' + url.pathname; // Redirect to '/pages/dashDoc/notification'
        }else{
          if( userType == 'doctor')
          {     url.pathname = '/pages/dashPat' + url.pathname;  }
            else{
              url.pathname = '/pages/auth/login ';
            }
        }
    
      

      return NextResponse.redirect(url);
    }


    
  }




  

  if (url.pathname === '/login' || url.pathname === '/signup') {
    url.pathname = '/pages/auth' + url.pathname; // Redirect to '/auth/login'
    return NextResponse.redirect(url);
  }




  console.timeEnd('middlewareExecutionTime');
  return NextResponse.next(); // Allow other routes to proceed as normal


}

export const config = {
  matcher: ['/pages/:path*', '/'],
} 