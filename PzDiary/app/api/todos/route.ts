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

// TODO: 필터와 서치 키워드 쿼리문 적용한 GET 코드 작성
// 1. 필터 조건에 맞춰 정렬할 쿼리문 작성 :  날짜별, 중요도별, 수정순
// select * from Todo order by todoCompletedDate desc 기한순
// select * from Todo order by todoUpdateDate desc 수정순
// select * from Todo order by priority desc 우선순위순

// 2. 서치 키워드에 맞춰 정렬할 쿼리문 작성 : SELECT * FROM Todo title LIKE ‘%?%’ or detail LIKE ‘%?%’, title, detail;

// 투두todo list for login user
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const boardId = searchParams.get('boardId');
  // console.log('🚀 todos/route.ts GET boardId:', boardId);

  // // 필터 및 검색
  // const todoCompletedDate = searchParams.get('todoCompletedDate'); // desc, asc
  // const todoCompletedDateQuery =
  //   'select * from Todo order by todoCompletedDate ';
  // const todoUpdateDate = searchParams.get('todoUpdateDate');
  // const todoUpdateDateQuery = 'select * from Todo order by todoUpdateDate ';
  // const priority = searchParams.get('priority');
  // const priorityQuery = 'select * from Todo order by priority ';
  // const keyword = searchParams.get('keyword');
  // const keywordQuery =
  //   'SELECT * FROM Todo title LIKE ‘%?%’ or detail LIKE ‘%?%’';

  // const sortSearch = async (sql: string, param: string) => {
  //   const [data] = await query(sql, [param]);
  //   return data;
  // };

  try {
    const todos = await query(
      'select id, title, detail, todoCompletedDate, status from Todo where boardId = ? order by status asc',
      [boardId]
    );
    // console.log('🚀 todos/route.ts GET todos:', todos);

    return NextResponse.json({ todos });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'error!';
    console.table(message);
    return NextResponse.json({ boardId, message }, { status: 500 });
  }
}
