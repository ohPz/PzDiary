'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { ITodo } from '@/lib/types';
import { creatTodo, deleteTodo, updateTodo } from '@/lib/utils';
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

export function SaveTask({
  todo,
  isCreate = false,
  boardTitle,
}: {
  todo: ITodo;
  isCreate?: boolean;
  boardTitle: string;
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
    todo.boardId =
      progressRef.current?.value == '대기'
        ? 1
        : progressRef.current?.value == '진행'
          ? 2
          : 3;
    todo.title = titleRef.current?.value || '';
    todo.detail = detailRef.current?.value || '';
    todo.todoCompletedDate = date || new Date();
    console.log('date');
    console.log('todo.todoCompletedDate', todo.todoCompletedDate);

    isCreate ? creatTodo(todo) : updateTodo(todo.id, todo);
    router.push('/');
  };

  const doDelete = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoId = todo.id;
    deleteTodo(todoId);
    router.push('/');
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
          <Calendar
            id='todoCompletedDate'
            mode='single'
            selected={date}
            onSelect={setDate}
            className='rounded-md'
            showOutsideDays={true}
            initialFocus={true}
          />
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
