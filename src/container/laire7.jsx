/*ToDoEntry - dropdown, button, calendar*/

import { useEffect, useRef } from "react";
// import Button from "./atoms/Button";
import Input from "./atoms/Input";

export default function Login() {
  // export default function Login({ enterToDo }) {

  const titleRef = useRef();
  const contentRef = useRef();

  // const enterEntry = (evt) => {
  //   evt.preventDefault();
  //   // evt.stopPropagation();
  //   // console.log("nameRef.current.value>>", nameRef.current.value);
  //   const title = titleRef.current.value;
  //   const content = contentRef.current.value;
  //   if (!title || !content) {
  //     alert("이름과 패스워드를 정확히 입력하세요!");
  //     if (!title) title.current.focus();
  //     else content.current.focus();
  //     return;
  //   }

  //   enterToDo(titleRef.current.value, contentRef.current.value);
  // };
  //untitled ???
  useEffect(() => {
    if (titleRef.current) titleRef.current.focus();
  }, [titleRef]);

  return (
    <form className="border border-red-300 p-5">
      <div className="w-full h-5/6" id="textInput">
        <div className="w-10/12" id="titleDiv">
          <Input
            label="제목"
            ref={titleRef}
            name="title"
            placeholder="제목을 입력해 주세요"
          />
          {/* <input type="text" ref={nameRef} className="px-2 ring-1 ring-inset" /> */}
        </div>

        <div className="w-80" id="contentDiv">
          <Input
            label="내용"
            ref={contentRef}
            name="content"
            placeholder="내용을 입력해 주세요"
          />
        </div>
      </div>

      {/* <div className="mt-3 flex justify-center">
        <Button
          onClick={login}
          text="로그인"
          type="primary"
          size="lg"
          className="px-5 py-1"
        />
      </div> */}
    </form>
  );
}
