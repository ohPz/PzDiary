import { NextRequest, NextResponse } from 'next/server';
import { auth } from './lib/auth';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log('🚀  pathname:', pathname);
  const session = auth();
  if (!session)
    return NextResponse.redirect('http://localhost:3000/api/auth/signin');
  return NextResponse.next();
}

export const config = {
  matcher: ['/photos/:path*'],
};
