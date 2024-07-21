'use client';

import SaveBoard from '@/components/board/saveBoard';
import { SortBoardList } from '@/components/board/sortBoardList';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, ChangeEvent } from 'react';

type Todo = {
  id: string;
  title: string;
};

export default function HnContainer() {
  // Todo: userId 체크해서 적용하기
  const userId = 1;

  const [todoDetail, setTodoDetail] = useState<Todo[]>([]);
  const [search, setSearch] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    console.log('Searching for:', search);

    const filteredTodos = todoDetail.filter((todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
    setTodoDetail(filteredTodos);
  };

  return (
    <div className='flex gap-3 justify-center items-center'>
      <SaveBoard
        isCreate={true}
        board={{ id: 0, userId: userId, title: 'Board를 만들어주세요.' }}
      >
        +Add Board
      </SaveBoard>
      <Input
        type='text'
        name='detail'
        value={search}
        onChange={onChange}
        placeholder='검색'
      />
      <Button onClick={onSearch} size={'sm'}>
        검색
      </Button>
      <SortBoardList />
    </div>
  );
}
