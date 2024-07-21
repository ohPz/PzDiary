import { NextRequest, NextResponse } from 'next/server';
import { execute, query } from '@/lib/db';

// user login
export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const date = new Date();

  console.log('🚀 utils - date:', date);

  try {
    const rows = await execute(
      'update User set lastLogin = ? where email = ?',
      [date, email]
    );

    const [user] = await query('select id, email from User where email = ?', [
      rows.insertId,
    ]);

    // console.log('🚀 todos/[todoId]/route.ts update todo:', todo);
    return NextResponse.json(user);
  } catch (error) {
    return handleError(error);
  }
}

function handleError(error: unknown) {
  const message = error instanceof Error ? error.message : 'error!';
  console.table(message);
  return NextResponse.json({ message }, { status: 500 });
}
