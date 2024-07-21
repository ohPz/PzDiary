import { RowDataPacket } from 'mysql2';

// client
export type User = {
  id: number;
  email: string;
  passwd?: string;
};

export const DefaultUser: User = { id: 0, email: '' };

// server
export type UserRowData = User & RowDataPacket;

export type Board = {
  id: number;
  userId: number;
  title: string;
  status: boolean;
};

export type BoardRowData = Board & RowDataPacket;

export type Todo = {
  id: number;
  boardId: number;
  priority: string;
  title: string;
  detail: string;
  status: number;
  alert: number;
  todoCreateDate: string;
};

export type TodoRowData = Todo & RowDataPacket;
