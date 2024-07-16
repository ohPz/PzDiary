import { RowDataPacket } from 'mysql2';
import { NextRequest, NextResponse } from 'next/server';
import { execute, query } from '@/lib/db';
import { IBoard } from '@/lib/types';

type Params = {
  params: { boardId: string };
};

// get the board
export async function GET(req: NextRequest, { params: { boardId } }: Params) {
  try {
    const [board] = await query<IBoard & RowDataPacket>(
      'select id, title from Board where id = ?',
      [boardId]
    );
    // console.log('🚀 boards/[boardId]/route.ts GET board:', board);
    return NextResponse.json({ board });
  } catch (error) {
    return handleError(error);
  }
}

// modify the board
export async function PATCH(req: NextRequest, { params: { boardId } }: Params) {
  return await update(req, boardId);
}
export async function PUT(req: NextRequest, { params: { boardId } }: Params) {
  return await update(req, boardId);
}

// delete the board
export async function DELETE(
  req: NextRequest,
  { params: { boardId } }: Params
) {
  try {
    const rows = await execute('delete from Board where id = ?', [boardId]);
    const message = rows.affectedRows > 0 ? 'OK' : 'Fail to delete';
    const status = rows.affectedRows > 0 ? 200 : 404;
    // console.log('🚀 boards/[boardId]/route.ts DELETE rows:', rows);
    // console.log('🚀 boards/[boardId]/route.ts DELETE message:', message);
    // console.log('🚀 boards/[boardId]/route.ts DELETE status:', status);
    return NextResponse.json({ message }, { status });
  } catch (error) {
    return handleError(error);
  }
}

async function update(req: NextRequest, boardId: string) {
  const { title } = await req.json();

  try {
    await execute('update Board set title = ? where id = ?', [title, boardId]);
    const [board] = await query('select * from Board where id = ?', [boardId]);
    // console.log('🚀 boards/[boardId]/route.ts update board:', board);
    return NextResponse.json({ board });
  } catch (error) {
    return handleError(error);
  }
}

function handleError(error: unknown) {
  const message = error instanceof Error ? error.message : 'error!';
  console.table(message);
  return NextResponse.json({ message }, { status: 500 });
}
