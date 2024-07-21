import NextAuth, { NextAuthConfig } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from './lib/auth';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log('🚀  pathname:', pathname);
  // const session = auth();
  // if (!session)
  //   return NextResponse.redirect('http://localhost:3000/api/auth/signin');
  // return NextResponse.next();
}

export const config = {
  matcher: ['/my'],
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
