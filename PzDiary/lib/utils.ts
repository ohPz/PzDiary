import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const URL = 'http://localhost:3000/api';

export const createBoard = async (req: Request) => {
  const data = req.json();
  const res = await fetch(`${URL}/boards`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getBoardOne = async (boardId: number) => {
  const res = await fetch(`${URL}/boards?boardId=${boardId}`);
  return res.json();
};

export const getBoards = async (userId: number) => {
  console.log(`# userId : ${userId}`);
  const res = await fetch(`${URL}/boards?userId=${userId}`);
  return res.json();
};

export const updateBoard = async (boardId: number, req: Request) => {
  const data = req.json();
  const res = await fetch(`${URL}/boards?boardId=${boardId}`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteBoard = async (boardId: number) => {
  const res = await fetch(`${URL}/boards?boardId=${boardId}`, {
    method: 'DELETE',
  });
  return res.json();
};

export const creatTodo = async (req: Request) => {
  const data = req.json();
  const res = await fetch(`${URL}/todos`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getTodoOne = async (todoId: number) => {
  const res = await fetch(`${URL}/todos?todoId=${todoId}`);
  return res.json();
};

export const getTodos = async (boardId: number) => {
  const res = await fetch(`${URL}/todos?boardId=${boardId}`);
  return res.json();
};

export const updateTodo = async (todoId: number, req: Request) => {
  const data = req.json();
  const res = await fetch(`${URL}/todos?todoId=${todoId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteTodo = async (todoId: number) => {
  const res = await fetch(`${URL}/todos?todoId=${todoId}`, {
    method: 'DELETE',
  });
  return res.json();
};
