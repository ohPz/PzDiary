import { NextRequest, NextResponse } from 'next/server';
import { execute, query } from '@/lib/db';

type Params = {
  params: { todoId: string };
};

// get the todo
export async function GET(req: NextRequest, { params: { todoId } }: Params) {
  try {
    const [todo] = await query(
      'select title, detail, boardId, todoCompletedDate, status, priority from Todo where id = ?',
      [todoId]
    );
    // console.log('🚀 todos/[todoId]/route.ts GET todo:', todo);
    return NextResponse.json({ todo });
  } catch (error) {
    return handleError(error);
  }
}

// modify the todo
export async function PATCH(req: NextRequest, { params: { todoId } }: Params) {
  return await update(req, todoId);
}
export async function PUT(req: NextRequest, { params: { todoId } }: Params) {
  return await update(req, todoId);
}

// delete the todo
export async function DELETE(req: NextRequest, { params: { todoId } }: Params) {
  try {
    const rows = await execute('delete from Todo where id = ?', [todoId]);
    const message = rows.affectedRows > 0 ? 'OK' : 'Fail to delete';
    const status = rows.affectedRows > 0 ? 200 : 404;
    // console.log('🚀 todos/[todoId]/route.ts DELETE rows:', rows);
    // console.log('🚀 todos/[todoId]/route.ts DELETE message:', message);
    // console.log('🚀 todos/[todoId]/route.ts DELETE status:', status);
    return NextResponse.json({ message }, { status });
  } catch (error) {
    return handleError(error);
  }
}

async function update(req: NextRequest, todoId: string) {
  const { title, detail, todoCompletedDate, status, priority } =
    await req.json();
  let deadline = new Date(todoCompletedDate);

  try {
    await query(
      'update Todo set title = ?, detail = ?, todoCompletedDate = ?, status = ?, priority = ? where id = ?',
      [title, detail, deadline, status, priority, todoId]
    );

    const [todo] = await query('select * from Todo where id = ?', [todoId]);

    // console.log('🚀 todos/[todoId]/route.ts update todo:', todo);
    return NextResponse.json({ todo });
  } catch (error) {
    return handleError(error);
  }
}

function handleError(error: unknown) {
  const message = error instanceof Error ? error.message : 'error!';
  console.table(message);
  return NextResponse.json({ message }, { status: 500 });
}
