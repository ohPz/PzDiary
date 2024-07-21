import { ITodo } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { OpenTask } from './saveTask_SY';

export function Task({
  todo,
  todoBoardId: boardId,
}: {
  todo: ITodo;
  todoBoardId: number;
}) {
  return (
    <Card className='mt-2'>
      <CardHeader className='px-3 py-2 flex flex-row justify-between space-y-0'>
        <CardTitle className='flex text-xl items-center'>
          {todo.title}
        </CardTitle>
        <OpenTask todo={todo} isCreate={false} todoBoardId={boardId} />
      </CardHeader>
      <CardContent className='p-4 pt-0'>{todo.detail}</CardContent>
    </Card>
  );
}
