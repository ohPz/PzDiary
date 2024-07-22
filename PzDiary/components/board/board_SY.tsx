import { OpenBoard } from '@/components/board/openBoard_SY';
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
    <Card className='flex flex-none h-full min-w-[150px] overflow-y-auto relative z-0'>
      <CardHeader className='p-4 space-y-0 z-0'>
        <CardTitle className='w-full z-0'>
          {board.title}
          <OpenBoard board={board} isCreate={false} />
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {/* <CardFooter>

      </CardFooter> */}
    </Card>
  );
}
