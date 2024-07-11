import { Board } from '@/components/board/board';
import { Task } from '@/components/task/task';

// Todo: 눈에 보기 쉽게 파일 분리

export default function SeContainer() {
  const BoardTitle: string = '대기';

  // SampleData
  const todos: Todo[] = [
    {
      id: 1,
      userId: 1,
      title: 'Task 추가 시 Task Card 추가하기',
      detail:
        '대기 보드 하단에서 + Add Task 클릭 및 데이터 입력하여 Save 버튼을 클릭하면 대기 보드에 Task Card 추가하기',
      completed: 0,
    },
    {
      id: 2,
      userId: 1,
      title: 'Task 수정 시 progress 데이터 불러오기',
      detail:
        '대기 보드에서는 progress가 "Select Progress"가 아니라 "대기"값으로 불러와야 함',
      completed: 0,
    },
    {
      id: 3,
      userId: 1,
      title: '대기 보드 상하스크롤 적용',
      detail:
        '보드 타이틀, Add 버튼은 그대로 있고 Task Card에만 상하스크롤 적용',
      completed: 0,
    },
    {
      id: 4,
      userId: 1,
      title: 'AWS 서버 구성',
      detail: 'EC2 Public IP를 교수님께 전달, pzdiary와 함께 도메인 요청',
      completed: 0,
    },
    {
      id: 5,
      userId: 1,
      title: 'AWS RDS 구성',
      detail: 'EC2와 연결할 DB 위해 교수님 RDS 스키마 요청',
      completed: 0,
    },
    {
      id: 6,
      userId: 1,
      title: '백엔드 연동',
      detail: '화면상으로 메모 추가, 수정, 삭제가 된다면 백엔드 연동 실시',
      completed: 0,
    },
  ];

  return (
    <>
      <Board boardTitle={BoardTitle}>
        {todos.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </Board>
    </>
  );
}
