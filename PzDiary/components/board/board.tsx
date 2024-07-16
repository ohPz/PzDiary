import { ITodo } from '@/lib/types';
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

export async function Board({
  boardId,
  boardTitle,
}: {
  boardId: number;
  boardTitle: string;
}) {
  const { todos } = await getTodos(boardId);

  return (
    <Card className='flex-1 h-full overflow-y-scroll'>
      <CardHeader className='p-4 space-y-0'>
        <CardTitle>{boardTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        {todos.map((todo: ITodo, i: number) => (
          <Task key={i} todo={todo} />
        ))}
      </CardContent>
      <CardFooter>
        <SaveTask isCreate={true} />
      </CardFooter>
    </Card>
  );
}
