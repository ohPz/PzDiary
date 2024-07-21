'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { IBoard } from '@/lib/types';
import { createBoard, deleteBoard, updateBoard } from '@/lib/utils';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type Props = {
  board: IBoard;
  isCreate?: boolean;
  children: React.ReactNode;
};
type Iflag = {
  type: string;
  description: string;
  buttonClassName: string;
  buttonVariant: 'secondary' | 'ghost' | null;
};

export default function SaveBoard({
  board,
  isCreate = false,
  children,
}: Props) {
  let flag: Iflag;

  // create Board일 때
  if (isCreate) {
    flag = {
      type: '+Add Board',
      description: '',
      buttonClassName: 'w-fit',
      buttonVariant: 'secondary',
    };
  } else {
    // update Board일 때
    flag = {
      type: 'Edit Board',
      description: 'changes to ',
      buttonClassName: 'justify-start w-fit',
      buttonVariant: 'ghost',
    };
  }

  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsOpen(isOpen);
  }, []);

  const doSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    board.title = titleRef.current?.value || '';
    isCreate ? createBoard(board) : updateBoard(board.id, board);
    setIsOpen(!isOpen);
    router.push('/');
  };

  const doDelete = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const boardId = board.id;
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteBoard(boardId);
      setIsOpen(!isOpen);
    } else {
      alert('삭제되었습니다.');
    }
    router.push('/');
  };

  return (
    <Dialog onOpenChange={(isOpen) => setIsOpen(!isOpen)}>
      <DialogTrigger asChild>
        <Button variant={flag.buttonVariant} className={flag.buttonClassName}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{flag.type}</DialogTitle>
          <DialogDescription>
            Make {flag.description}your Board here. Click save when you are
            done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='title' className='text-right'>
              Title
            </Label>
            <Input
              id='title'
              defaultValue={board?.title}
              className='col-span-3'
              ref={titleRef}
            />
          </div>
        </div>
        <DialogFooter>
          {!isCreate ? (
            <form onSubmit={doDelete}>
              <Button variant='destructive'>Delete</Button>
            </form>
          ) : (
            ''
          )}
          <form onSubmit={doSave}>
            <Button>Save</Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
