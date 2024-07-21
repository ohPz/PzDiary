import { RowDataPacket } from 'mysql2';
import { NextRequest, NextResponse } from 'next/server';
import { execute, query } from '@/lib/db';
import { IUser } from '@/lib/types';

// add User for google login
export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const rows = await execute('insert into USer(email) values(?)', [email]);
  // console.log('🚀 users/route.ts POST users:', rows);

  const [user] = await query<IUser & RowDataPacket>(
    'select id, email from USer where id = ?',
    [rows.insertId]
  );
  // console.log('🚀 users/route.ts POST users:, user);

  return NextResponse.json({ user });
}

// login user info
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const email = searchParams.get('email');
  console.log('🚀 users/[email]/route.ts GET email:', email);
  try {
    const [userInfo] = await query(
      'select id, email from User where email = ?',
      [email]
    );
    console.log('🚀 users/[email]/route.ts GET userInfo:', userInfo);

    return NextResponse.json(userInfo);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'error!';
    // console.log('🚀 users/[email]/route.ts GET message:', message);
    return NextResponse.json({ email, message }, { status: 500 });
  }
}
