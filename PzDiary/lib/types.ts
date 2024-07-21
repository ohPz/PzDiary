export type IUser = {
  id?: number;
  email: string;
  password?: string;
};
export type IBoard = {
  id: number;
  userId: number;
  title: string;
  status?: number; // index
};
export type ITodo = {
  id: number;
  boardId: number;
  title: string;
  detail: string;
  todoCompletedDate: Date;
  status?: number; // index
};
