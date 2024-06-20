import React, { useState } from 'react'; // React와 useState 훅을 import하여 React 기능을 사용할 수 있도록 
import './Dropdown.css'; // ./Dropdown.css를 import하여 Dropdown 컴포넌트에 스타일을 적용

const Dropdown = () => { // Dropdown이라는 함수형 컴포넌트를 정의
  const options = ['상', '중', '하']; // 배열!!!!!!!!!!!!!!!
  const [isOpen, setIsOpen] = useState(false); 
  // isOpen은 드롭다운 메뉴가 열려 있는지 닫혀 있는지를 관리. 초기값은 false로 설정
  const toggleDropdown = () => { // toggleDropdown 함수는 호출될 때마다 isOpen 상태를 변환. 즉 드롭 다운을 열거나 닫음
    setIsOpen(!isOpen)
  }

  const selectOption = (option) => {
    setIsOpen(false); // selectOption 은 드롭 다운 닫기
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        중 <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => selectOption(option)}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
// return 구문에서는 JSX를 사용하여 컴포넌트의 UI를 정의
// dropdown 클래스를 가진 div 요소는 전체 드롭다운 컨테이너를 의미
// dropdown-toggle 클래스를 가진 button 요소는 드롭다운 헤더를 표시
// 클릭 시 toggleDropdown 함수를 호출하여 드롭다운을 열거나 닫음
// {isOpen && ...} 구문은 isOpen이 true일 때만 드롭다운 메뉴를 표시
// 드롭다운 메뉴는 ul 요소로 표현, 각 옵션은 options 배열을 반복하여 li 요소로 표시
// 각 옵션을 클릭하면 selectOption 함수가 호출되어 해당 옵션을 선택하고 드롭다운을 닫음

export default Dropdown; // Dropdown 컴포넌트를 외부에서 import할 수 있도록 export
