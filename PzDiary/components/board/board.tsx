'use client';

import { useEffect, useState } from 'react';
import { IBoard, ITodo } from '@/lib/types';
import { getTodos } from '@/lib/utils';
import { SaveTask } from '../task/saveTask';
import { Task } from '../task/task';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export function Board({ board }: { board: IBoard }) {
  // 해당 Board의 Todo 리스트 가져오기
  const [todos, setBoards] = useState<ITodo[]>([]);
  useEffect(() => {
    const getTodoList = async (boardId: number) => {
      const data = await getTodos(boardId);
      setBoards(data.todos);
    };
    if (board && board.id) getTodoList(board.id);
  }, [board]);

  return (
    <Card className='flex-1 h-full overflow-y-scroll'>
      <CardHeader className='p-4 space-y-0'>
        <CardTitle>{board.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {todos?.map((todo: ITodo, i: number) => <Task key={i} todo={todo} />)}
      </CardContent>
      <CardFooter>
        <SaveTask isCreate={true} />
      </CardFooter>
    </Card>
  );
}
