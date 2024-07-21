'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useEffect, useRef, useState } from 'react';
import { useSession } from '@/lib/session';
import { IBoard } from '@/lib/types';

export function OpenBoard({
  board,
  isCreate = false,
}: {
  board?: IBoard;
  isCreate?: boolean;
}) {
  let flag: {
    [k: string]: string;
  } = {};
  let flag2: string;

  //titleflag
  // create Task일 때
  if (isCreate) {
    flag = {
      type: '+ Add Board',
      description: '',
    };
  } else {
    // update Task일 때
    flag = {
      type: 'Edit',
      description: 'changes to ',
    };
  }

  //button flag
  // create Task일 때
  if (isCreate) flag2 = 'Cancel';
  // update Task일 때
  else flag2 = 'Delete';

  const titleRef = useRef<HTMLInputElement>(null);
  const { addBoard, saveBoard, removeBoard } = useSession();
  const add = () => {
    const title = titleRef.current?.value || '';
    const newBoard = { id: Math.random(), userId: 1, title: title };
    addBoard(newBoard);
  };

  const save = () => {
    const title = titleRef.current?.value || '';
    const editBoard = {
      id: board?.id || 1,
      userId: 1,
      title: title,
    };
    saveBoard(editBoard);
  };

  const remove = () => {
    if (board) removeBoard(board.id);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={isCreate ? 'secondary' : 'default'}
          className={
            isCreate
              ? 'w-full h-6 z-0 place-items-stretch'
              : 'absolute top-1 right-1 z-0'
          }
          size={isCreate ? null : 'sm'}
        >
          {flag.type}
        </Button>
      </DialogTrigger>
      <DialogContent className='min-w-20'>
        <DialogHeader>
          <DialogTitle>{flag.type}</DialogTitle>
          <DialogDescription>
            Make {flag.description} your board here. Click save when you are
            done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            {isCreate ? (
              <Input
                ref={titleRef}
                id='title'
                className='col-span-3'
                placeholder='제목을 입려하세요'
              />
            ) : (
              <Input
                ref={titleRef}
                id='title'
                defaultValue={board?.title}
                className='col-span-3'
              />
            )}
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant={isCreate ? 'outline' : 'destructive'}
              onClick={!isCreate ? remove : () => {}}
            >
              {flag2}
            </Button>
          </DialogClose>
          <DialogTrigger asChild>
            <Button onClick={isCreate ? add : save}>Save</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
