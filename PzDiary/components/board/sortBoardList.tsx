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

    let _params = selectedOption.split('::');
    console.log(`selectedOption : ${_params}`);
    const dataFetching = async (keyword: string[]) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/todos?${keyword[0]}=${keyword[1]}`
      );
      return res.json();
    };

    dataFetching(_params);
  };

  return (
    <Select onValueChange={selectOption} defaultValue={selectedOption}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='정렬' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>기한</SelectLabel>
          <SelectItem id='todoCompletedDate' value='todoCompletedDate::asc'>
            오래된순
          </SelectItem>
          <SelectItem id='todoCompletedDate' value='todoCompletedDate::desc'>
            최근순
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>우선순위</SelectLabel>
          <SelectItem id='priority' value='priority::0'>
            우선순위 없음
          </SelectItem>
          <SelectItem id='priority' value='priority::1'>
            상
          </SelectItem>
          <SelectItem id='priority' value='priority::2'>
            중
          </SelectItem>
          <SelectItem id='priority' value='priority::3'>
            하
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
