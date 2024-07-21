import { ITodo } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { SaveTask } from './saveTask';

export function Task({
  todo,
  boardTitle,
}: {
  todo: ITodo;
  boardTitle: string;
}) {
  return (
    <Card className='mt-2'>
      <CardHeader className='px-3 py-2 flex flex-row justify-between space-y-0'>
        <CardTitle className='flex text-xl items-center'>
          {todo.title}
        </CardTitle>
        <SaveTask todo={todo} boardTitle={boardTitle} />
      </CardHeader>
      <CardContent className='p-4 pt-0'>{todo.detail}</CardContent>
    </Card>
  );
}
