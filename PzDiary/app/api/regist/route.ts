import { UserRowData } from '@/types';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { execute, query } from '@/lib/db';
import { getUserByEmail } from '@/lib/serveraction';

export async function GET(req: NextRequest) {
  const session = await auth();
  console.log('🚀  session:', session);
  const { searchParams } = req.nextUrl;
  const id = searchParams.get('id');

  try {
    const user = await query('select id from User where Id = ?', [
      Id,
    ]);
    console.log('🚀 boards/route.ts GET boards:', );


  const user = await getUserByEmail(email);
  if (!user) {
    return NextResponse.json(
      {},
      { status: 404, statusText: `${email} user's not found` }
    );
  }
  const { id } = user;
  return NextResponse.json({ id });
}

export async function POST(req: NextRequest) {
  const { nickname, email, passwd } = await req.json();
  console.table({ nickname, email, passwd });

  try {
    const rsh = await execute(
      'insert into User(nickname, email, passwd) values(?,?,?)',
      [nickname, email, passwd]
    );

    const { insertId: newer } = rsh;

    const [user] = await query<UserRowData>('select * from User where id = ?', [
      newer,
    ]);

    return NextResponse.json({ user });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json(
        { error },
        { status: 500, statusText: error.message }
      );

    return NextResponse.json({ error }, { status: 500 });
  }
}}
