export type IUser = {
  id: number;
  email: string;
  password?: string;
};
export type IBoard = {
  id: number;
  userId: number;
  title: string;
};
export type ITodo = {
  id: number;
  boardId: number;
  title: string;
  detail: string;
  todoCompletedDate: Date;
};

export type IBoardView = {
  id: number;
  title: string;
};
