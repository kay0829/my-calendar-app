import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { getMonth, getYear } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import '@styles/Main/customMiniCalendar.css';

import { useAppDispatch, useAppSelector } from '@hooks/reduxWithType';
import { changeViewDate } from '@features/mainSlice';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import Spacing from '@component/common/Spacing';

import { getViewDateObj, getMomentFromViewDate, getDateFromViewDate } from "@utils/formattingDate";

registerLocale("ko", ko);
export interface ICustomHeader {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
}

function MiniCalendar () {
    const { viewDate } = useAppSelector((state) => state.main);
    const dispatch = useAppDispatch();

    const CustomHeader = ({date, decreaseMonth, increaseMonth}: ICustomHeader) => {
        return (
            <div className='flex justify-between px-2 font-sans'>
                <div className='flex'>
                    <span>{`${getYear(date)}년`}</span>
                    <Spacing space='mr-1'/>
                    <span>{`${getMonth(date) + 1}월`}</span>
                </div>
                <div>
                    <button type='button' onClick={() => {
                        decreaseMonth();

                        const momentDate = getMomentFromViewDate(viewDate);
                        const prevMonth = momentDate.subtract(1, 'month').startOf('month').format();
                        dispatch(changeViewDate(getViewDateObj(prevMonth)));
                    }}>
                        <BiChevronLeft size="1.2rem" color='#53535a' />
                    </button>
                    <button type='button' onClick={() => {
                        increaseMonth();

                        const momentDate = getMomentFromViewDate(viewDate);
                        const nextMonth = momentDate.add(1, 'month').startOf('month').format();
                        dispatch(changeViewDate(getViewDateObj(nextMonth)));
                    }}>
                        <BiChevronRight size="1.2rem" color='#53535a' />
                    </button>
                </div>
            </div>
        )
    }

    return (
      <div className='flex justify-center items-center py-2'>
        <DatePicker
            locale="ko" // 달력 표시 언어
            shouldCloseOnSelect={false} // 날짜를 선택하면 datepicker가 자동으로 닫히게 할지 여부
            selected={getDateFromViewDate(viewDate)} // 선택된 날짜 type: Date
            onChange={(date) => {
                if (date) {
                    const temp = getViewDateObj(date.toISOString());
                    dispatch(changeViewDate(temp));
                }
            }} // 다른 날짜 클릭 시 날짜 변하게 하는 이벤트 핸들러
            inline // input을 클릭하여 달력을 띄우는 것이 아닌 달력만 보이도록 하는 속성
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => ( // *년 *월 부분의 Header를 커스텀하게 
                <CustomHeader
                    date={date}
                    decreaseMonth={decreaseMonth}
                    increaseMonth={increaseMonth}
                />
              )}
        />
      </div>
    );
}

export default MiniCalendar;