import { ITodo } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { OpenTask } from './openTask_SY';

export function Task({
  todo,
  todoBoardId: boardId,
}: {
  todo: ITodo;
  todoBoardId: number;
}) {
  return (
    <Card className='relative mt-2 min-w-[150px]'>
      <CardHeader className='px-3 py-2 flex flex-row justify-between space-y-0'>
        <CardTitle className='flex text-xl items-center'>
          {todo.title}
        </CardTitle>
        <OpenTask todo={todo} isCreate={false} todoBoardId={boardId} />
      </CardHeader>
      <CardContent className='p-4 pt-0 inline-block'>{todo.detail}</CardContent>
    </Card>
  );
}
