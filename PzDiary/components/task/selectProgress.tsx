import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export function SelectProgress() {
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
