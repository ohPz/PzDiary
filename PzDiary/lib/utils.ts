import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const URL = 'http://localhost:3000/api';

export const getBoards = async (userId: number) => {
  const res = await fetch(`${URL}/boards?userId=${userId}`);
  return res.json();
};

export const getTodos = async (boardId: number) => {
  const res = await fetch(`${URL}/todos?boardId=${boardId}`);
  return res.json();
};

export const getTodo = async (todoId: number) => {
  const res = await fetch(`${URL}/todos?todoId=${todoId}`);
  return res.json();
};
