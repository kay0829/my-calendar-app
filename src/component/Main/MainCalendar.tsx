import React, { useState, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '@styles/Main/customMainCalendar.css';

moment.locale('ko-KR');
const localizer = momentLocalizer(moment);

interface IWeek {
    [index: string]: string;
    Sun: string;
    Mon: string;
    Tue: string;
    Wed: string;
    Thu: string;
    Fri: string;
    Sat: string;
}

interface IEvent {
    allDay?: boolean | undefined;
    title?: React.ReactNode | undefined;
    start?: Date | undefined;
    end?: Date | undefined;
    resource?: any;
}

const events = [
  {
    id: 0,
    allDay: false,
    title: <p>0Board meeting</p>,
    start: new Date(2023, 5, 24, 9, 0, 0),
    end: new Date(2023, 5, 24, 13, 0, 0),
    resource: 0,
  },
  {
    id: 1,
    allDay: false,
    title: <p>1Board meeting</p>,
    start: new Date(2023, 5, 23, 9, 0, 0),
    end: new Date(2023, 5, 24, 9, 0, 0),
    resource: 1,
  },
  {
    id: 2,
    allDay: false,
    title: <p>2Board meeting</p>,
    start: new Date(2023, 5, 10, 9, 0, 0),
    end: new Date(2023, 5, 11, 12, 0, 0),
    resource: 1,
  },
  {
    id: 11,
    allDay: false,
    title: <p>3Board meeting</p>,
    start: new Date(2023, 5, 29, 18, 0, 0),
    end: new Date(2023, 5, 29, 19, 0, 0),
    resource: 2,
  },
]

function MainCalendar() {
    const [myEvents, setEvents] = useState(events);

    const handleSelectSlot = useCallback(
      ({ start, end }: {start: Date, end: Date}) => {
        const title = window.prompt('New Event name')
        if (title) {
          setEvents([...myEvents, { id: myEvents.length + 1, allDay: false, start, end, title: <p>{title}</p>, resource: myEvents.length + 1 }])
        }
      },
      [setEvents]
    )
  
    const handleSelectEvent = useCallback(
      (event: IEvent) => window.alert(event.title),
      []
    )

    const StyleNone = () => <></>;
    const DateHeader = ({label, date}: {label: string, date: Date}) => {
      const day = moment(date).format("M월 D일");
      const isToday = moment().format("YYYYMD") === `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;

      const DayElement = () => {
        if (isToday) {
          return (
            <div className='bg-selected w-fit p-1 rounded-full cursor-pointer hover:bg-blue-600'>
              <p className='text-xs text-center text-white font-normal'>{Number.parseInt(label)}</p>
            </div>
          )
        }

        return <p className='text-xs text-center cursor-pointer'>{label === '01' ? day : Number.parseInt(label)}</p>
      }

      return (
        <DayElement />
      )
    };

    const MonthHeader = ({label}: {label: string}) => {
      const week: IWeek = {Sun: '일', Mon: '월', Tue: '화', Wed: '수', Thu: '목', Fri: '금', Sat: '토'};
      return (
        <p className='text-xs text-zinc-400'>{week[label] || ''}</p>
      )
    }

    const EventElement = ({title}: {title: string}) => {
      return (
        <div>{title}</div>
      )
    }

    return (
      <div className='h-full'>
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            events={myEvents}
            selectable
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            components={{
              toolbar: StyleNone,
              dateCellWrapper: StyleNone,
              month: {
                header: MonthHeader,
                dateHeader: DateHeader,
                // event: EventElement,
              }
            }}
          />
      </div>
    )
}

export default MainCalendar;
