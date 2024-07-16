'use client';

import { Button } from '@/components/ui/button';
import { useState, ChangeEvent } from 'react';

type Todo = {
  id: string;
  title: string;
};

export default function HnContainer() {
  const [todoDetail, setTodoDetail] = useState<Todo[]>([]);
  const [search, setSearch] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {

    console.log('Searching for:', search);
    

    const filteredTodos = todoDetail.filter(todo =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
    setTodoDetail(filteredTodos);
  };

  return (
    <div>
      <input
        type='text'
        name='detail'
        value={search}
        onChange={onChange}
        placeholder='검색'
      />

      <Button onClick={onSearch}>
        검색
      </Button>
    </div>
  );
}
