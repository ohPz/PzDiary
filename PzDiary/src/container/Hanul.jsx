import React from 'react';

const Hanul = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-none h-1/2">위</div>
      <div className="flex flex-row flex-none h-1/2">
        <div className="flex-1 bg-green-500 p-4">아래 1</div>
        <div className="flex-1 bg-red-500 p-4">
          아래2
          {children}
        </div>
        <div className="flex-1 bg-yellow-500 p-4">아래 3</div>
      </div>
    </div>
  );
};
// flex: 부모 컨테이너를 Flex 컨테이너로 설정
// flex-col: Flex 방향을 세로(수직)로 설정
// flex-row: Flex 방향을 가로(수평)로 설정
// h-screen: 높이를 화면 전체로 설정
// flex-none: Flex 컨테이너 내에서 크기를 늘리거나 줄이지 않도록 설정
// flex-1: 남은 공간을 균등하게 나누어 차지하도록 설정
export default Hanul;
