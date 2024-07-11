import { ReactNode } from 'react';
import { SaveTask } from '../task/saveTask';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export function Board({
  boardTitle,
  children,
}: {
  boardTitle: string;
  children: ReactNode;
}) {
  return (
    <Card className='h-full overflow-y-scroll'>
      <CardHeader className='p-4 space-y-0'>
        <CardTitle>{boardTitle}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <SaveTask isCreate={true} />
      </CardFooter>
    </Card>
  );
}
