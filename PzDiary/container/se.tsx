'use client';

import { Board } from '@/components/board/board';
import { ReactSortable } from 'react-sortablejs';
import { useEffect, useState } from 'react';
import { IBoard } from '@/lib/types';
import { getBoards, updateBoard } from '@/lib/utils';

export default function SeContainer() {
  // Todo: user session에서 userId 가져오기
  const userId = 1;

  // 해당 사용자의 Board id, title 리스트 가져오기
  const [boards, setBoards] = useState<IBoard[]>([]);
  useEffect(() => {
    const getBoardsList = async (_userId: number) => {
      console.log('🚀 boards/route.ts GET getBoardsList:');
      const data = await getBoards(_userId);
      console.log('🚀 boards/route.ts GET data:', data);
      setBoards(data.boards);
    };

    if (userId) getBoardsList(userId);

    console.log('🚀 boards/route.ts GET boards:', boards);
  }, []);

  const updateBoardIndex = async (
    oldIndex: number | undefined,
    newIndex: number | undefined
  ) => {
    const _boardOld = boards.find((board) => board.status == oldIndex);
    const _boardNew = boards.find((board) => board.status == newIndex);
    // console.log('🚀 updateBoardIndex _boardOld:', _boardOld?.id);
    // console.log('🚀 updateBoardIndex _boardOld:', _boardOld?.status);
    // console.log('🚀 updateBoardIndex _boardNew:', _boardNew?.id);
    // console.log('🚀 updateBoardIndex _boardNew:', _boardNew?.status);

    let boardOld: IBoard = {
      id: _boardOld?.id || 0,
      userId: _boardOld?.userId || 0,
      title: _boardOld?.title || '',
      status: newIndex || 0,
    };
    let boardNew: IBoard = {
      id: _boardNew?.id || 0,
      userId: _boardNew?.userId || 0,
      title: _boardNew?.title || '',
      status: oldIndex || 0,
    };
    await updateBoard(_boardOld?.id || 0, boardOld);
    await updateBoard(_boardNew?.id || 0, boardNew);
  };

  return (
    <ReactSortable
      className='flex flex-row gap-5 h-fit w-fit px-4 py-2'
      group='shared'
      animation={0}
      delay={1}
      swap={false}
      multiDrag={false}
      setList={setBoards}
      list={boards}
      onUpdate={(evt) => {
        console.log(evt.oldIndex, evt.newIndex);
        updateBoardIndex(evt.oldIndex, evt.newIndex);
      }}
    >
      {boards?.map((board: IBoard, i: number) => (
        <Board key={i} board={board} />
      ))}
    </ReactSortable>
  );
}
