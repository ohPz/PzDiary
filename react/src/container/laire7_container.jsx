// import { useState } from "react";
// import { flushSync } from "react-dom";
import "../App.css";
// import Input from "./components/Input";
// import laire7 from "./container/laire7";

export default function LaireContainer() {
  // mock
  // const count = 0;

  // const SampleSession = {
  //   loginUser: { id: 1, name: "Hong" },
  //   // loginUser: null,
  //   toDo: [
  //     { id: 100, title: "Chores", content: "laundry" },
  //     { id: 101, title: "Social", content: "lunch with Dan" },
  //     { id: 102, title: "Work", content: "finish project" },
  //   ],
  // };

  // const [session, setSession] = useState(SampleSession);

  // const enterToDo = (title, content) => {
  //   const id = Math.max(...session.cart.map((item) => item.id)) ?? 0;
  //   const item = { id: id + 1, name, price };
  //   const toDoEntry = {
  //     ...session,
  //     loginUser: { ...session.loginUser, title, content },
  //   };
  //   setSession(toDoEntry);
  // };

  // const removeItem = (itemId) => {
  //   setSession({
  //     ...session,
  //     cart: [...session.cart.filter((item) => item.id !== itemId)],
  //   });
  // };

  // const addItem = (name, price) => {
  //   const id = Math.max(...session.cart.map((item) => item.id)) ?? 0;
  //   const item = { id: id + 1, name, price };
  //   console.log("🚀  id:", id);
  //   setSession({ ...session, cart: [...session.cart, item] });
  // };

  // const saveItem = (id, name, price) => {
  //   const editingItem = { id, name, price };
  //   setSession({
  //     ...session,
  //     cart: [
  //       ...session.cart.map((item) => (item.id === id ? editingItem : item)),
  //     ],
  //   });
  // };

  return (
    <>
      <div className="w-screen h-screen" id="all">
        <div className="h-1/2 flex flex-col bg-yellow-500" id="topHalfDiv">
          <div className="w-3/5 h-full" id="input">
            <div className="w-full h-1/6" id="dropdown"></div>
            <div className="w-full h-5/6" id="textInput">
              <div className="w-10/12" id="titleDiv">
                <div className="flex max-w-sm m-8 mb-2 pr-3" id="titleInput">
                  <label className="text-gray-500 font-bold">제목: </label>
                  <input
                    name="title"
                    placeholder="제목을 입력해 주세요"
                    className="w-80 p-3 
                    text-gray-900 border 
                    border-gray-300 
                    rounded-lg bg-gray-50 
                    text-base 
                      focus:ring-gray-500"
                  />
                </div>
              </div>
              <div className="w-80" id="contentDiv">
                <div className="flex max-w-sm mr-8 ml-8 pr-3" id="contentInput">
                  <label className="text-gray-500 font-bold">내용: </label>
                  <input
                    name="content"
                    placeholder="내용을 입력해 주세요"
                    className="p-3 m-3 
                    text-gray-900 border 
                    border-gray-300 
                    rounded-lg bg-gray-50 
                    text-base 
                      focus:ring-gray-500"
                  />
                </div>
              </div>
            </div>

            <div className="" id="calendar"></div>
          </div>

          <div className="h-1/2 flex flex-col" id="bottomHalfDiv">
            <div className="h-full flex flex-row">
              <div className="w-1/3 h-full bg-orange-500" id="planSpan">
                1
              </div>
              <div className="w-1/3 h-full bg-teal-500" id="doSpan">
                2
              </div>
              <div className="w-1/3 h-full bg-purple-500" id="progressSpan">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
