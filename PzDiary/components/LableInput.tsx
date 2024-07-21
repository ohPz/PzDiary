import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useId } from 'react';

type Props = {
  label: string;
  value: string;
  readonly?: boolean;
};

export default function LabelInput({ label, value, readonly = true }: Props) {
  const id = useId();
  return (
    <div className='grid grid-cols-4 items-center justify-center align-middle gap-4 m-3'>
      <Label htmlFor={id} className='text-right justify-center'>
        {label}
      </Label>
      <Input
        id={id}
        type='text'
        placeholder={value}
        readOnly={readonly}
        className='col-span-3 border-0 focus:border-0 focus-visible:ring-0'
      />
    </div>
  );
}
