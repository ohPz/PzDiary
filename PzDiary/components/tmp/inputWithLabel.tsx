'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '../ui/textarea';

export function InputWithLabel() {
  function SelectProgress() {
    return (
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select Progress' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select Progress</SelectLabel>
            <SelectItem value='대기'>대기</SelectItem>
            <SelectItem value='진행'>진행</SelectItem>
            <SelectItem value='완료'>완료</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
  return (
    <>
      <div className='h-5/6 ml-2 mr-2 p-3'>
        <div className='flex w-full items-center gap-3.5 mb-4 ml-6 pr-6'>
          <div className='flex-none'>
            <Label htmlFor='dropdown'>
              <p className='text-slate-500'>진행</p>
            </Label>
          </div>
          <div className='flex-grow'>
            <SelectProgress />
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
      </div>
    </>
  );
}
