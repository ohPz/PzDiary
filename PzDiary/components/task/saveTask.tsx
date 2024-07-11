'use client';

import { useState } from 'react';
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
import { SelectProgress } from './selectProgress';

export function SaveTask({
  todo,
  isCreate = false,
}: {
  todo?: Todo;
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
              <Input id='title' className='col-span-3' />
            ) : (
              <Input
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
              <Input id='detail' className='col-span-3' />
            ) : (
              <Input
                id='detail'
                defaultValue={todo?.detail}
                className='col-span-3'
              />
            )}
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='progress' className='text-right'>
              Progress
            </Label>

            {isCreate ? <SelectProgress /> : <SelectProgress />}
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
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
