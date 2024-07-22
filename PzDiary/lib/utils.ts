import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IBoard, ITodo, IUser } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const URL = process.env.NEXT_PUBLIC_API_URL;

export const registUser = async (user: IUser) => {
  const res = await fetch(`${URL}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'content-type': 'application/json' },
  });
  return res.json();
};

export const loginUser = async (email: string) => {
  console.log('🚀 utils - email:', email);
  const data: IUser = { email };
  const res = await fetch(`${URL}/users/login`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getUserInfo = async (email: string) => {
  const res = await fetch(`${URL}/users?email=${email}`);
  return res.json();
};

export const createBoard = async (board: IBoard) => {
  await fetch(`${URL}/boards`, {
    method: 'POST',
    body: JSON.stringify(board),
  })
    .then((res) => console.table(res))
    .catch((err) => console.table(err));
};

export const getBoardOne = async (boardId: number) => {
  const res = await fetch(`${URL}/boards/${boardId}`);
  return res.json();
};

export const getBoards = async (userId: number) => {
  const res = await fetch(`${URL}/boards?userId=${userId}`);
  return res.json();
};

export const updateBoard = async (boardId: number, board: IBoard) => {
  await fetch(`${URL}/boards/${boardId}`, {
    method: 'PUT',
    body: JSON.stringify(board),
  })
    .then((res) => console.table(res))
    .catch((err) => console.table(err));
};

export const deleteBoard = async (boardId: number) => {
  await fetch(`${URL}/boards/${boardId}`, {
    method: 'DELETE',
  })
    .then((res) => console.table(res))
    .catch((err) => console.table(err));
};

export const creatTodo = async (todo: ITodo) => {
  await fetch(`${URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(todo),
  })
    .then((res) => console.table(res))
    .catch((err) => console.table(err));
};

export const getTodoOne = async (todoId: number) => {
  const res = await fetch(`${URL}/todos/${todoId}`);
  return res.json();
};

export const getTodos = async (boardId: number) => {
  const res = await fetch(`${URL}/todos?boardId=${boardId}`);
  return res.json();
};

export const updateTodo = async (todoId: number, todo: ITodo) => {
  await fetch(`${URL}/todos/${todoId}`, {
    method: 'PUT',
    body: JSON.stringify(todo),
  })
    .then((res) => console.table(res))
    .catch((err) => console.table(err));
};

export const deleteTodo = async (todoId: number) => {
  await fetch(`${URL}/todos/${todoId}`, {
    method: 'DELETE',
  })
    .then((res) => console.table(res))
    .catch((err) => console.table(err));
};
