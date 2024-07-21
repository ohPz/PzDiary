'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
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

  const titleRef = useRef<HTMLInputElement>(null);
  const { addBoard, saveBoard } = useSession();
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={isCreate ? 'secondary' : 'default'}
          className={isCreate ? 'w-full' : ''}
          size={isCreate ? 'default' : 'sm'}
        >
          {flag.type}
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{flag.type}</DialogTitle>
          <DialogDescription>
            Make {flag.description} your board here. Click save when you're
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
          <DialogTrigger asChild>
            <Button onClick={isCreate ? add : save}>Save</Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
