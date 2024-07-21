import { Todo, TodoRowData, UserRowData } from '@/types';
import { execute, query } from './db';

export const getUserByEmail = async (email: string | null) => {
  if (!email) return null;
  const [user] = await query<UserRowData>(
    'select * from User where email = ?',
    [email]
  );

  return user;
};
