'use client';

import { ReactSortable } from 'react-sortablejs';
import { useEffect, useState } from 'react';
import { IBoard, ITodo } from '@/lib/types';
import { getTodos, updateTodo } from '@/lib/utils';
import { SaveTask } from '../task/saveTask';
import { Task } from '../task/task';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import SaveBoard from './saveBoard';

type Props = { board: IBoard };

export function Board({ board }: Props) {
  // 해당 Board의 Todo 리스트 가져오기
  const [todos, setBoards] = useState<ITodo[]>([]);
  useEffect(() => {
    const getTodoList = async (boardId: number) => {
      const data = await getTodos(boardId);
      setBoards(data.todos);
    };
    if (board && board.id) getTodoList(board.id);
  }, [board]);

  const updateTodoIndex = async (
    oldIndex: number | undefined,
    newIndex: number | undefined
  ) => {
    const _todoOld = todos.find((todo) => todo.status == oldIndex);
    const _todoNew = todos.find((todo) => todo.status == newIndex);
    console.log('🚀 updateTodoIndex _todoOld:', _todoOld);
    console.log('🚀 updateTodoIndex _todoOld:', _todoOld?.id);
    console.log('🚀 updateTodoIndex _todoOld:', _todoOld?.status);
    console.log('🚀 updateTodoIndex _todoNew:', _todoNew);
    console.log('🚀 updateTodoIndex _todoNew:', _todoNew?.id);
    console.log('🚀 updateTodoIndex _todoNew:', _todoNew?.status);

    let todoOld: ITodo = {
      id: _todoOld?.id || 0,
      boardId: _todoOld?.boardId || 0,
      title: _todoOld?.title || '',
      detail: _todoOld?.detail || '',
      todoCompletedDate: _todoOld?.todoCompletedDate || new Date(),
      status: oldIndex || 0,
    };
    let todoNew: ITodo = {
      id: _todoNew?.id || 0,
      boardId: _todoNew?.boardId || 0,
      title: _todoNew?.title || '',
      detail: _todoNew?.detail || '',
      todoCompletedDate: _todoNew?.todoCompletedDate || new Date(),
      status: newIndex || 0,
    };
    await updateTodo(_todoOld?.id || 0, todoOld);
    await updateTodo(_todoNew?.id || 0, todoNew);
  };

  return (
    <Card className='flex-1 w-80 overflow-y-scroll mt-5'>
      <CardHeader className='p-4 space-y-0'>
        <SaveBoard board={board}>
          <CardTitle>{board.title}</CardTitle>
        </SaveBoard>
      </CardHeader>
      <CardContent>
        <ReactSortable
          className='itemWrapper'
          group='itemWrapper'
          animation={0}
          delay={1}
          swap={false}
          multiDrag={true}
          setList={setBoards}
          list={todos}
          onUpdate={(evt) => {
            // console.log(evt.oldIndex, evt.newIndex);
            // updateTodoIndex(evt.oldIndex, evt.oldIndex);
            console.log(evt.oldDraggableIndex, evt.newDraggableIndex);
            updateTodoIndex(evt.oldDraggableIndex, evt.newDraggableIndex);
          }}
        >
          {todos?.map((todo: ITodo, i: number) => (
            <Task key={i} todo={todo} boardTitle={board.title} />
          ))}
        </ReactSortable>
      </CardContent>
      <CardFooter>
        <SaveTask
          boardTitle={board.title}
          isCreate={true}
          todo={{
            id: 0,
            boardId: 1,
            title: 'Task 만들기',
            detail: 'Task를 만들어주세요',
            todoCompletedDate: new Date(),
          }}
        />
      </CardFooter>
    </Card>
  );
}
