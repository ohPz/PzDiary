'use client';

import { Board } from '@/components/board/board_SY';
// export default SyContainer;
import { OpenBoard } from '@/components/board/saveBoard_SY';
import { Task } from '@/components/task/task';
import { useSession } from '@/lib/session';
import { ITodo } from '@/lib/types';

export default function SyContainter() {
  const callSession = useSession();
  const boards = callSession.session.boards;

  // SampleData
  const todos: ITodo[] = [
    {
      id: 1,
      boardId: 1,
      title: 'Task 추가 시 Task Card 추가하기',
      detail:
        '대기 보드 하단에서 + Add Task 클릭 및 데이터 입력하여 Save 버튼을 클릭하면 대기 보드에 Task Card 추가하기',
      todoCompletedDate: new Date(),
    },
    {
      id: 2,
      boardId: 1,
      title: 'Task 수정 시 progress 데이터 불러오기',
      detail:
        '대기 보드에서는 progress가 "Select Progress"가 아니라 "대기"값으로 불러와야 함',
      todoCompletedDate: new Date(),
    },
    {
      id: 3,
      boardId: 1,
      title: '대기 보드 상하스크롤 적용',
      detail:
        '보드 타이틀, Add 버튼은 그대로 있고 Task Card에만 상하스크롤 적용',
      todoCompletedDate: new Date(),
    },
    {
      id: 4,
      boardId: 1,
      title: 'AWS 서버 구성',
      detail: 'EC2 Public IP를 교수님께 전달, pzdiary와 함께 도메인 요청',
      todoCompletedDate: new Date(),
    },
    {
      id: 5,
      boardId: 1,
      title: 'AWS RDS 구성',
      detail: 'EC2와 연결할 DB 위해 교수님 RDS 스키마 요청',
      todoCompletedDate: new Date(),
    },
    {
      id: 6,
      boardId: 1,
      title: '백엔드 연동',
      detail: '화면상으로 메모 추가, 수정, 삭제가 된다면 백엔드 연동 실시',
      todoCompletedDate: new Date(),
    },
  ];
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
                {todos.map((_todo) => (
                  <Task key={_todo.id} todo={_todo} />
                ))}
              </Board>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
