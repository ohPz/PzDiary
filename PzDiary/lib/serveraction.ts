'use server';

// import { Todo, TodoRowData, Book, BookRowData, UserRowData } from '@/lib/types';
import { execute, query } from './db';

export const createBoard = async (
  id: number,
  userId: number,
  title: String
) => {
  const rsh = await execute(
    'insert into Board(id, userId, title) values(?,?,?)',
    [id, userId, title]
  );

  return rsh.insertId;
};

// export const getMarks = async (bookId: number) => {
//   const marks = await query<MarkRowData>("select * from Mark where book = ?", [
//     bookId,
//   ]);

//   return marks;
// };

// export const createMark = async ({
//   book,
//   url,
//   title,
//   descript,
//   image,
// }: Mark) => {
//   const rsh = await execute(
//     "insert into Mark(book, url, title, descript, image) values(?,?,?,?,?)",
//     [book, url, title, descript, image]
//   );

//   return rsh.insertId;
// };

// export const getUserByEmail = async (email: string | null) => {
//   if (!email) return null;
//   const [user] = await query<UserRowData>(
//     "select * from User where email = ?",
//     [email]
//   );

//   return user;
// };
