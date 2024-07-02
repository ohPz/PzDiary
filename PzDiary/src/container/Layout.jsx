import Card from "../components/Card";

const Layout = () => {
  const sampleDataList = [
    { header: "대기", title: "팀 프로젝트", detail: "팀 프로젝트 시작" },
    { header: "진행", title: "리액트 복습", detail: "리액트 복습" },
    {
      header: "완료",
      title: "타입스크립트",
      detail: "타입스크립트 복습",
    },
  ];
  return (
    <div id="layout" className="flex flex-col w-screen h-screen">
      <div id="layout1" className="flex-none h-1/2 bg-blue-500 p-4">
        위
        <div id="addMemo" className="flex flex-row bg-indigo-500 p-4">
          <div id="text" className="flex-1 flex-col bg-green-500 p-4">
            <div id="dropdownAll" className="flex-1 flex flex-row">
              <div id="dropdown1" className="flex-1 bg-pink-300 p-4"></div>
              <div id="dropdown2" className="flex-1 bg-pink-500 p-4"></div>
            </div>
            <div id="title" className="flex-1 bg-red-500 p-4"></div>
            <div id="detail" className="flex-1 bg-yellow-500 p-4"></div>
          </div>

          <div id="date" className="flex-1 flex flex-col bg-purple-500 p-4">
            <div id="calendar1" className="flex-1 bg-pink-300 p-4"></div>
            <div id="calendar2" className="flex-1 bg-pink-500 p-4"></div>
          </div>
        </div>
      </div>

      <div id="layout2" className="flex flex-row flex-none h-1/2">
        <div id="board1" className="flex-1 bg-green-500 p-4">
          대기
          <Card card={sampleDataList[0]} />
        </div>
        <div id="board2" className="flex-1 bg-red-500 p-4">
          진행
          <Card card={sampleDataList[1]} />
        </div>
        <div id="board3" className="flex-1 bg-yellow-500 p-4">
          완료
          <Card card={sampleDataList[2]} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
