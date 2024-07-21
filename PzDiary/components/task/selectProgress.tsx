import { useEffect, useState } from 'react';
import { IBoard, ITodo } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

type Props = {
  board?: number;
  todo?: number;
};

export const SelectProgress = ({ board, todo }: Props) => {
  const [value, setValue] = useState('Select Progress');

  console.log(`SelectProgress: ${value}`);
  console.log(`SelectProgress: ${board || 1} ${todo || 0}`);

  return (
    <Select onValueChange={(value) => setValue(value)}>
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
};
