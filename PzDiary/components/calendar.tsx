'use client';

import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { useState } from 'react';

export default function Calendar() {
  const [curYear, setCurYear] = useState(new Date().getFullYear());
  // curMonth : 0이 1월, 11이 12월임
  const [curMonth, setCurMonth] = useState(new Date().getMonth());

  console.log(`이번 달은 ${curYear}년 ${curMonth + 1}월 입니다.`);

  const handlePrevButton = (e: React.MouseEvent) => {
    if (curMonth === 0) {
      // curMonth가 1월일 때 < 클릭 시 연도 -1, 월 12월로 set
      setCurYear(curYear - 1);
      setCurMonth(11);
    } else {
      // curMonth가 1월이 아닐 때 < 클릭 시 월 -1로 set
      setCurMonth(curMonth - 1);
    }
  };

  const handleNextButton = (e: React.MouseEvent) => {
    if (curMonth === 11) {
      // curMonth가 12월일 때 > 클릭 시 연도 +1, 월 1월로 set
      setCurYear(curYear + 1);
      setCurMonth(0);
    } else {
      // curMonth가 12월이 아닐 때 > 클릭 시 월 +1로 set
      setCurMonth(curMonth + 1);
    }
  };

  const handleTodayButton = (e: React.MouseEvent) => {
    setCurYear(new Date().getFullYear());
    setCurMonth(new Date().getMonth());
  };

  const CalendarHeader = () => {
    return (
      <div className='calendar_header flex flex-row justify-around'>
        <div className='calendar_header_pre_button content-center'>
          <MdArrowLeft onClick={handlePrevButton} />
        </div>
        <div className='calendar_header_cur_month'>
          {curYear}년 {curMonth + 1}월
        </div>
        {/* TODO : Button component 불러와서 쓰기 */}
        <button className='bg-blue-300' onClick={handleTodayButton}>
          오늘
        </button>
        <div className='calendar_header_next_button content-center'>
          <MdArrowRight onClick={handleNextButton} />
        </div>
      </div>
    );
  };

  const DayOfWeek = () => {
    return (
      <thead className='calendar_table_weekly'>
        <tr>
          <th>일</th>
          <th>월</th>
          <th>화</th>
          <th>수</th>
          <th>목</th>
          <th>금</th>
          <th>토</th>
        </tr>
      </thead>
    );
  };

  const getMonthInfo = (year: number, month: number) => {
    // curMonth의 날짜가 며칠까지 있는지 알아오기
    const firstDay = new Date(year, month).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    return { firstDay, lastDate };
  };

  const RenderDateCell = () => {
    const dateCells = [];

    const { firstDay, lastDate } = getMonthInfo(curYear, curMonth);
    console.log(
      `이번 달은 ${curMonth + 1}월(${firstDay}일~${lastDate}일)이므로, ${lastDate}까지 있습니다.`
    );
    let date = new Date(curYear, curMonth, 1 - firstDay).getDate();
    let count = 0;

    // 이전 월의 날짜부터 시작하므로 현재 월에서 -1
    let month = curMonth - 1;

    // 현재 그리고 있는 달력의 cell은 총 42개(6주*7일)이다
    while (count < 42) {
      if (count === firstDay) {
        date = 1;
        month++;
      }

      // dateCells에 Date 객체로 넣어주고, 표시할 때만 숫자로 표시한다
      dateCells.push(new Date(curYear, month, date));
      date++;
      count++;
    }

    const rows = [];
    while (dateCells.length) {
      rows.push(dateCells.splice(0, 7));
    }

    const today = new Date(new Date().setHours(24, 0, 0, 0)).toLocaleString();
    console.log(
      `오늘은 ${today}입니다. ::: cell.toLocaleString() ===  today ?`
    );

    return (
      <tbody className='calendar_table_dates'>
        {rows.map((row, i) => (
          <tr key={i} className='calendar_table_dates_week'>
            {row.map((cell, ci) => (
              <td key={ci} className='calendar_table_dates_cell'>
                {/* TODO : Button component 불러와서 쓰기 */}
                <button
                  onClick={() => alert(cell.toLocaleString())}
                  className={`calendar_table_dates_cell ${cell.toLocaleString() === today ? 'text-red-500' : ''}`}
                >
                  {cell.getDate()}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  const CalendarTable = () => {
    return (
      <table className='calendar_table text-center content-center'>
        <DayOfWeek />
        <RenderDateCell />
      </table>
    );
  };

  return (
    <div className='calendar border-2 border-blue-500 '>
      <CalendarHeader />
      <CalendarTable />
    </div>
  );
}
