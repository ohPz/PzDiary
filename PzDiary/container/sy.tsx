'use client';

import { Board } from '@/components/board/board_SY';
// export default SyContainer;
import { OpenBoard } from '@/components/board/saveBoard_SY';
import { OpenTask } from '@/components/task/saveTask_SY';
import { Task } from '@/components/task/task_SY';
import { useSession } from '@/lib/session';
import { ITodo } from '@/lib/types';

export default function SyContainter() {
  const callSession = useSession();
  const boards = callSession.session.boards;
  const todos = callSession.session.todos;
  // SampleData
  return (
    <>
      <div className='flex flex-row gap-3'>
        <div className='relative h-full w-full'>
          <div
            className='fixed right-0 rotate-180'
            style={{ writingMode: 'vertical-rl' }}
          >
            <OpenBoard isCreate={true} />
          </div>
          <div className='flex flex-row'>
            {boards.map((_board) => (
              <Board key={_board.id} board={_board}>
                {todos.map((_todo) => {
                  if (_todo.boardId == _board.id) {
                    return (
                      <Task
                        key={_todo.id}
                        todo={_todo}
                        todoBoardId={_board.id}
                      />
                    );
                  }
                })}
                <OpenTask isCreate={true} todoBoardId={_board.id} />
              </Board>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
