import { RowDataPacket } from 'mysql2';
import { NextRequest, NextResponse } from 'next/server';
import { execute, query } from '@/lib/db';
import { IBoard } from '@/lib/types';

// add board for login user
export async function POST(req: NextRequest) {
  const { title, userId } = await req.json();
  console.log('🚀 boards/route.ts POST req:', title, userId);
  const rows = await execute('insert into Board(title, userId) values(?,?)', [
    title,
    userId,
  ]);
  console.log('🚀 boards/route.ts POST rows:', rows);
  const [board] = await query<IBoard & RowDataPacket>(
    'select * from Board where id = ?',
    [rows.insertId]
  );
  console.log('🚀 boards/route.ts POST board:', board);
  return NextResponse.json({ board });
}

// board list for login user
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const userId = searchParams.get('userId');
  // console.log('🚀 boards/route.ts GET userId:', userId);
  try {
    const boards = await query('select id, title from Board where userId = ?', [
      userId,
    ]);
    console.log('🚀 boards/route.ts GET boards:', boards);

    return NextResponse.json({ boards });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'error!';
    // console.log('🚀 boards/route.ts GET message:', message);
    return NextResponse.json({ userId, message }, { status: 500 });
  }
}
