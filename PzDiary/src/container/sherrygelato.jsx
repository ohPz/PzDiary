export default function Sherrygelato() {
  return (
    <>
      {/* <div id="container" className="flex flex-col bg-red-100">
        <div id="col1" className="flex basis-1/2">
          col 01
        </div>
        <div id="col2" className="flex basis-1/2 flex-row bg-red-300">
          <div id="row1" className="flex bg-blue-100">
            row 01
          </div>
          <div id="row2" className="flex bg-blue-300">
            row 02
          </div>
          <div id="row3" className="flex bg-blue-500">
            row 03
          </div>
        </div>
      </div> */}

      <div id="container" className="grid grid-rows-2 bg-red-100">
        <div id="col1" className="">
          col 01
        </div>
        <div id="col2" className="grid grid-cols-3 bg-red-300">
          <div id="row1" className="bg-blue-100">
            row 01
          </div>
          <div id="row2" className="bg-blue-300">
            row 02
          </div>
          <div id="row3" className="bg-blue-500">
            row 03
          </div>
        </div>
      </div>
    </>
  );

  // 1차 목표
  // 레이아웃
  // 상하 2등분
  // 좌우 3등분

  // 2차 목표 - 레이아웃 완료 후 해당 영역에 각 컴포넌트 넣어보기
  // 소영 : input, draganddrop
  // 이랑 : button,
  // 하늘 : dropdown
  // 승은 : card, calender
  // 영주 : draganddrop, dark/light mode
}
