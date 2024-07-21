import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const SortBoardList = () => {
  const [selectedOption, setSelectedOption] = useState<string>('정렬');

  const selectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Select onValueChange={selectOption} defaultValue={selectedOption}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='정렬' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>기한</SelectLabel>
          <SelectItem value='기한없음'>기한 없음</SelectItem>
          <SelectItem value='오래된순'>오래된순</SelectItem>
          <SelectItem value='최근순'>최근순</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>우선순위</SelectLabel>
          <SelectItem value='우선순위없음'>우선순위 없음</SelectItem>
          <SelectItem value='상'>상</SelectItem>
          <SelectItem value='중'>중</SelectItem>
          <SelectItem value='하'>하</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
