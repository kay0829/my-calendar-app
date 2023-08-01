import React, { useState, useCallback, useEffect } from "react";
import { Calendar, momentLocalizer, EventProps, SlotInfo } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "@styles/Main/customMainCalendar.css";

import { useAppDispatch, useAppSelector } from "@hooks/reduxWithType";
import { openModal, setNewEvent } from "@features/mainSlice";

import { formattingTime, getDateFromViewDate, isAnotherDate } from "@utils/formattingDate";

moment.locale("ko-KR");
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
];

function MainCalendar() {
    const { viewDate, drilldownView } = useAppSelector((state) => state.main);
    const dispatch = useAppDispatch();

    const [myEvents, setEvents] = useState(events);
    const [selectedDate, setSelectedDate] = useState(getDateFromViewDate(viewDate));
    const { year, month, date } = viewDate;

    useEffect(() => {
        let temp = {
            year: year || moment().year().toString(),
            month: month || moment().month().toString(),
            date: date || moment().date().toString(),
        };

        setSelectedDate(getDateFromViewDate(temp));
    }, [year, month, date]);

    const handleSelectSlot = useCallback(
        (slotInfo: SlotInfo) => {
            const { start, end, action, box } = slotInfo;
            // TODO: double click action
            console.log(action, start, end);

            const temp = {
                id: myEvents.length + 1,
                allDay: true,
                start,
                end,
                title: <p>{"(제목 없음)"}</p>,
                resource: myEvents.length + 1,
            };
            if (action === "click") {
                dispatch(openModal());
                dispatch(setNewEvent(temp));
                console.log(box);
            }
        },
        [dispatch, myEvents.length],
    );

    const handleSelectEvent = useCallback((event: IEvent) => {
        window.alert(event.title);
        setEvents(events);
    }, []);

    const StyleNone = () => <></>;

    const DateHeader = ({ label, date }: { label: string, date: Date }) => {
        const day = moment(date).format("M월 D일");
        const isToday = moment().format("YYYYMD") === `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;

        const DayElement = () => {
            if (isToday) {
                return (
                    <div className="flex justify-center items-center bg-selected w-5 h-5 p-1 rounded-full cursor-pointer hover:bg-blue-600">
                        <p className="text-xs text-center text-white font-normal">{Number.parseInt(label)}</p>
                    </div>
                );
            }

            return (
                <p className="text-xs text-center cursor-pointer">{label === "01" ? day : Number.parseInt(label)}</p>
            );
        };

        return <DayElement />;
    };

    const MonthHeader = ({ label }: { label: string }) => {
        const week: IWeek = {
            Sun: "일",
            Mon: "월",
            Tue: "화",
            Wed: "수",
            Thu: "목",
            Fri: "금",
            Sat: "토",
        };
        return <p className="text-xs text-zinc-400">{week[label] || ""}</p>;
    };

    const EventElement = (props: EventProps) => {
        const { title, event } = props;
        const { allDay, resource, start, end } = event;

        let classStr = "flex align-center px-1 py-0.5 rounded text-xs font-normal ";
        let bg = "";
        let tx = "";

        if (resource === 0) {
            bg += "bg-first";
            tx += "text-first";
        } else if (resource === 1) {
            bg += "bg-second";
            tx += "text-second";
        } else if (resource === 2) {
            bg += "bg-tertiary";
            tx += "text-tertiary";
        }

        if (allDay || isAnotherDate(start, end)) {
            classStr += "text-white";
        } else {
            classStr += "text-primary";
        }

        return (
            <>
                {allDay || isAnotherDate(start, end) ? (
                    <div className={`${classStr} ${bg}`}>{title}</div>
                ) : (
                    <div className={classStr}>
                        <p className={tx}>⦁</p>
                        <p className="pr-1">{formattingTime(start)}</p>
                        {title}
                    </div>
                )}
            </>
        );
    };

    return (
        <div className="h-full">
            <Calendar
                localizer={localizer}
                drilldownView={drilldownView || "month"}
                date={selectedDate}
                onNavigate={(newDate) => setSelectedDate(newDate)}
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
                        event: EventElement,
                    },
                }}
            />
        </div>
    );
}

export default MainCalendar;
