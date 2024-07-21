'use client';

import { useRef, useState } from 'react';
import { useSession } from '@/lib/session';
import { ITodo } from '@/lib/types';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
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
import { Textarea } from '../ui/textarea';
import { SelectProgress } from './selectProgress';

export function OpenTask({
  todo,
  todoBoardId,
  isCreate = false,
}: {
  todo?: ITodo;
  todoBoardId: number;
  isCreate?: boolean;
}) {
  let flag: {
    [k: string]: string;
  } = {};
  const [date, setDate] = useState<Date | undefined>(new Date());

  // create Task일 때
  if (isCreate) {
    flag = {
      type: '+ Add Task',
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
  const detailRef = useRef<HTMLTextAreaElement>(null);

  const { addTodo, saveTodo } = useSession();

  const add = () => {
    const title = titleRef.current?.value || '';
    const detail = detailRef.current?.value || '';

    const newTodo = {
      id: Math.random(),
      boardId: todoBoardId,
      title: title,
      detail: detail,
      todoCompletedDate: date || new Date(),
    };
    alert(`title: ${title}, detail: ${detail}`);
    addTodo(newTodo);
  };

  const save = () => {
    const title = titleRef.current?.value || '';
    const detail = detailRef.current?.value || '';

    const editTodo = {
      id: todo?.id || 0,
      boardId: todoBoardId,
      title: title,
      detail: detail,
      todoCompletedDate: date || new Date(),
    };
    saveTodo(editTodo);
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
            Make {flag.description}your Task here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='title' className='text-right'>
              Title
            </Label>
            {isCreate ? (
              <Input ref={titleRef} id='title' className='col-span-3' />
            ) : (
              <Input
                ref={titleRef}
                id='title'
                defaultValue={todo?.title}
                className='col-span-3'
              />
            )}
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='detail' className='text-right'>
              detail
            </Label>

            {isCreate ? (
              <Textarea ref={detailRef} id='detail' className='col-span-3' />
            ) : (
              <Textarea
                ref={detailRef}
                id='detail'
                defaultValue={todo?.detail}
                className='col-span-3'
              />
            )}
          </div>
          {/* <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='progress' className='text-right'>
              Progress
            </Label>

            {isCreate ? <SelectProgress /> : <SelectProgress />}
          </div> */}
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='progress' className='text-right'>
            Deadline
          </Label>

          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            className='rounded-md'
            showOutsideDays={true}
            initialFocus={true}
          />
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
