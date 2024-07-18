'use client';

import { Board } from '@/components/board/board';
import { useEffect, useState } from 'react';
import { IBoard } from '@/lib/types';
import { getBoards } from '@/lib/utils';

export default function SeContainer() {
  // Todo: user session에서 userId 가져오기
  const userId = 1;

  // Todo: async await을 쓰면서 db에 대하여 Too many connections라,
  // Todo: useEffect를 추가했는데도 동일한 현상이 일어나고 있어서 ㅠㅠ
  // Todo: session에 board id를 저장, 읽기, 삭제하여 todo 리스트를 가져오는 것이
  // Todo: 서버 과부화가 되지 않을 것 같다.
  // 해당 사용자의 Board id, title 리스트 가져오기
  const [boards, setBoards] = useState<IBoard[]>([]);
  useEffect(() => {
    const getBoardsList = async (_userId: number) => {
      const data = await getBoards(_userId);
      setBoards(data.boards);
    };
    if (userId) getBoardsList(userId);
  }, []);

  return (
    <div className='flex flex-row gap-3'>
      {boards?.map((board: IBoard, i: number) => (
        <Board key={i} board={board} />
      ))}
    </div>
  );
}
