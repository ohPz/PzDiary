'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { IBoard, ITodo } from '@/lib/types';
import { creatTodo, deleteTodo, updateTodo } from '@/lib/utils';
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
import { Textarea } from '../ui/textarea';
import { DatePicker } from './datePicker';
import { SelectProgress } from './selectProgress';

export function SaveTask({
  todo,
  isCreate = false,
  board,
}: {
  todo: ITodo;
  isCreate?: boolean;
  board?: IBoard;
}) {
  const titleRef = useRef<HTMLInputElement>(null);
  const detailRef = useRef<HTMLTextAreaElement>(null);
  const progressRef = useRef<HTMLSelectElement>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    setDate(todo.todoCompletedDate);
  }, [todo.todoCompletedDate]);

  const router = useRouter();

  const doSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todo.boardId = board?.id || 0;
    todo.title = titleRef.current?.value || '';
    todo.detail = detailRef.current?.value || '';
    todo.todoCompletedDate = date || new Date();
    console.log('todo.todoCompletedDate', todo.todoCompletedDate);

    isCreate ? creatTodo(todo) : updateTodo(todo.id, todo);
    router.back();
  };

  const doDelete = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoId = todo.id;
    deleteTodo(todoId);
    router.back();
  };

  type Iflag = {
    type: string;
    description: string;
    buttonClassName: string;
    buttonVariant: 'secondary' | 'default';
    buttonSize: 'default' | 'sm';
  };

  let flag: Iflag;

  // create Task일 때
  if (isCreate) {
    flag = {
      type: '+ Add Task',
      description: '',
      buttonClassName: 'w-full',
      buttonVariant: 'secondary',
      buttonSize: 'default',
    };
  } else {
    // update Task일 때
    flag = {
      type: 'Edit',
      description: 'changes to ',
      buttonClassName: 'justify-start',
      buttonVariant: 'default',
      buttonSize: 'sm',
    };
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={flag.buttonVariant}
          className={flag.buttonClassName}
          size={flag.buttonSize}
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
            <Input
              id='title'
              defaultValue={todo?.title}
              className='col-span-3'
              ref={titleRef}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='detail' className='text-right'>
              Detail
            </Label>
            <Textarea
              id='detail'
              defaultValue={todo?.detail}
              className='col-span-3'
              ref={detailRef}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='progress' className='text-right'>
              Progress
            </Label>
            {isCreate ? <SelectProgress /> : <SelectProgress />}
          </div>
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label htmlFor='todoCompletedDate' className='text-right'>
            Deadline
          </Label>
          <DatePicker />
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
