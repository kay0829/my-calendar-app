import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { getMonth, getYear } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import '@styles/Main/customMiniCalendar.css';

import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import Spacing from '@component/common/Spacing';

registerLocale("ko", ko);

interface ICustomHeader {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
}

function MiniCalendar () {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const CustomHeader = ({date, decreaseMonth, increaseMonth}: ICustomHeader) => {
        return (
            <div className='flex justify-between px-2 font-sans'>
                <div className='flex'>
                    <span>{`${getYear(date)}년`}</span>
                    <Spacing space='mr-1'/>
                    <span>{`${getMonth(date)}월`}</span>
                </div>
                <div>
                    <button type='button' onClick={decreaseMonth}>
                        <BiChevronLeft size="1.2rem" color='#53535a' />
                    </button>
                    <button type='button' onClick={increaseMonth}>
                        <BiChevronRight size="1.2rem" color='#53535a' />
                    </button>
                </div>
            </div>
        )
    }

    return (
      <div className='flex justify-center items-center py-2'>
        <DatePicker
            dateFormat='yyyy.MM.dd' // 날짜 형태
            locale="ko" // 달력 표시 언어
            shouldCloseOnSelect={false} // 날짜를 선택하면 datepicker가 자동으로 닫히게 할지 여부
            selected={selectedDate} // 선택된 날짜 type: Date
            onChange={(date) => setSelectedDate(date)} // 다른 날짜 클릭 시 날짜 변하게 하는 이벤트 핸들러
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