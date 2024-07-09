import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('&&middleware&&>>', request.cookies);
  const didLogin = request.cookies.has('nextjs');
  if (!didLogin) return NextResponse.redirect(new URL('/ssg', request.url));
  return NextResponse.next();
}
export const config = {
  matcher: ['/api/ttt', '/bbb/:path*'],
};
