import { RowDataPacket } from 'mysql2';
import { NextRequest, NextResponse } from 'next/server';
import { execute, query } from '@/lib/db';
import { ITodo } from '@/lib/types';

// add todo for login user
export async function POST(req: NextRequest) {
  const { title, detail, boardId, todoCompletedDate } = await req.json();
  let deadline = new Date(todoCompletedDate);
  const rows = await execute(
    'insert into Todo(title, detail, boardId, todoCompletedDate) values(?,?,?,?)',
    [title, detail, boardId, deadline]
  );
  // console.log('🚀 todos/route.ts POST todo:', rows);

  const [todo] = await query<ITodo & RowDataPacket>(
    'select id, title, detail, boardId, todoCompletedDate from Todo where id = ?',
    [rows.insertId]
  );
  // console.log('🚀 todos/route.ts POST todo:', todo);

  return NextResponse.json({ todo });
}

// 투두todo list for login user
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const boardId = searchParams.get('boardId');
  // console.log('🚀 todos/route.ts GET boardId:', boardId);

  // // search와 sort 포함 다루기 위한 내용
  // const getAll = () => {
  //   const { searchParams } = req.nextUrl;
  //   let result: { [k: string]: string } = {};
  //   if (searchParams.size === 0) {
  //     return {};
  //   } else {
  //     searchParams.forEach((value, key) => {
  //       result[key] = value;
  //     });
  //     return result;
  //   }
  // };

  // const filterQuery = (keyword: string | string[]) => {
  //   let query = '';

  //   switch (keyword) {
  //     case 'boardId':
  //       query = 'select * from Todo where boardId = ? order by status asc';
  //       return query;
  //     case 'todoCompletedDate':
  //       query = 'select * from Todo order by todoCompletedDate ?';
  //       return query;
  //     case 'priority':
  //       query = 'select * from Todo order by priority ?';
  //       return query;
  //     case 'todoUpdateDate':
  //       query = 'select * from Todo order by todoUpdateDate ?';
  //       return query;
  //     case 'search':
  //       query = 'select * FROM Todo title LIKE ‘%?%’ or detail LIKE ‘%?%’';
  //       return query;
  //     default:
  //       return query;
  //   }
  // };

  // const params = getAll();
  // // console.log('🚀 todos/route.ts GET getAll:', params);
  // // console.log('🚀 todos/route.ts GET getAll:', Object.keys(params)[0]);
  // // console.log('🚀 todos/route.ts GET getAll:', Object.values(params)[0]);

  // let sqlQuery = filterQuery(Object.keys(params)[0]);
  // let queryParams = Object.values(params)[0];

  try {
    const todos = await query('select * from Todo where boardId = ?', [
      boardId,
    ]);
    // console.log('🚀 todos/route.ts GET todos:', todos);

    return NextResponse.json({ todos });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'error!';
    console.table(message);
    return NextResponse.json({ boardId, message }, { status: 500 });
  }
}
