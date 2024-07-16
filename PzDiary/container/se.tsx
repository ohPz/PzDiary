import { Board } from '@/components/board/board';
import { IBoardView } from '@/lib/types';
import { getBoards } from '@/lib/utils';

// Todo: 눈에 보기 쉽게 파일 분리

export default async function SeContainer() {
  // Todo: user session에서 userId 가져오기
  const userId = 1;

  // 해당 사용자의 Board id, title 리스트 가져오기
  const { boards } = await getBoards(userId);

  return (
    <div className='flex flex-row gap-3'>
      {boards.map((board: IBoardView, i: number) => (
        <Board key={i} boardId={board.id} boardTitle={board.title} />
      ))}
    </div>
  );
}
