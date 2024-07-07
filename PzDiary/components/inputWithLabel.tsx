'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from './ui/textarea';

export function InputWithLabel() {
  return (
    <>
      <div className='h-5/6 ml-2 mr-2 p-3'>
        <div className='flex w-full items-center gap-3.5 mb-4'>
          <div className='flex-none'>
            <Label htmlFor='dropdown'>
              <p className='text-slate-500'>드럽다운</p>
            </Label>
          </div>
          <div className='flex-grow'>
            <Input type='text' id='dropdown' placeholder='드럽다운' />
          </div>
        </div>
        <div className='flex w-full items-center gap-3.5 mb-4 ml-6 pr-6'>
          <div className='flex-none'>
            <Label htmlFor='title'>
              <p className='text-slate-500'>제목</p>
            </Label>
          </div>
          <div className='flex-grow'>
            <Input type='text' id='title' placeholder='제목을 입력해주세요' />
          </div>
        </div>
      </div>
      <div className='flex w-full items-center gap-3.5 mb-4 ml-6 pr-6'>
        <div className='flex-none'>
          <Label htmlFor='title'>
            <p className='text-slate-500'>제목</p>
          </Label>
        </div>
        <div className='flex-grow'>
          <Input type='text' id='title' placeholder='제목을 입력해주세요' />
        </div>
      </div>
      <div className='flex h-full w-full gap-3.5 ml-6 pr-6 mb-4'>
        <div className='flex-none justify-items-start mt-2'>
          <Label htmlFor='content'>
            <p className='text-slate-500'>내용</p>
          </Label>
        </div>
        <div className='flex-grow'>
          <Textarea id='content' placeholder='내용을 입력해주세요' />
        </div>
      </div>
    </>
  );
}
