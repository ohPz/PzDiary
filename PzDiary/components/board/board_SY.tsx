import { OpenBoard } from '@/components/board/saveBoard_SY';
import { ReactNode } from 'react';
import { IBoard } from '@/lib/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export function Board({
  board,
  children,
}: {
  board: IBoard;
  children: ReactNode;
}) {
  return (
    <Card className='h-full overflow-y-scroll'>
      <CardHeader className='p-4 space-y-0'>
        <CardTitle>{board.title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <OpenBoard board={board} isCreate={false} />
      </CardFooter>
    </Card>
  );
}
