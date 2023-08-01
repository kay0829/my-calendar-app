import { useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/reduxWithType";
import { changeViewDate, changeDrilldownView } from "@/features/mainSlice";

import { Outlet } from "react-router-dom";

import Gnb from "@component/Main/Gnb";
import Sidebar from "@component/Main/Sidebar";
import Aside from "@component/Main/Aside";
import EventAddModal from "@component/Main/MainCalendar/EventAddModal";

import { getViewDateObj, isDiffBetweenViewDateAndPathDate } from "@/utils/formattingDate";

import moment from "moment";

function Main() {
    const { viewDate, drilldownView } = useAppSelector((state) => state.main);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const params = useParams();
    const pathDate = {
        year: params.year || "",
        month: params.month || "",
        date: params.date || "",
    };

    useEffect(() => {
        // Case 1. url이 수정되는 경우
        // Case 1 - 1. url 을 정상적으로 입력하지 않은 경우 -> 오늘 날짜로 수정 및 이동
        if (!params.drilldownView || !params.year || !params.month || !params.date) {
            const today = moment().format();
            const temp = getViewDateObj(today);

            dispatch(changeDrilldownView("month"));
            dispatch(changeViewDate(temp));
            return;
        }

        // Case 1 - 2. url이 기존과 동일할 경우 -> 수정 필요 없음
        if (drilldownView === params.drilldownView && !isDiffBetweenViewDateAndPathDate(viewDate, pathDate)) {
            return;
        }

        // Case 1 - 3. url에서 drilldownView 부분이 다른 경우 -> state 수정
        if (
            drilldownView !== params.drilldownView &&
            (params.drilldownView === "month" || params.drilldownView === "week" || params.drilldownView === "day")
        ) {
            dispatch(changeDrilldownView(drilldownView));
        }

        // Case 1 - 4. url에서 날짜 부분이 다른 경우 -> state 수정
        if (isDiffBetweenViewDateAndPathDate(viewDate, pathDate)) {
            dispatch(
                changeViewDate({
                    year: pathDate.year,
                    month: pathDate.month,
                    date: pathDate.date,
                }),
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drilldownView, params.year, params.month, params.pathDate]);

    useEffect(() => {
        // Case 2. state를 수정하는 경우
        navigate(`${drilldownView}/${viewDate.year}/${viewDate.month}/${viewDate.date}`);
    }, [navigate, drilldownView, viewDate.year, viewDate.month, viewDate.date]);

    return (
        <div className="box-border font-sans text-primary w-screen h-screen flex flex-col">
            <Gnb />
            <div className="flex-1 flex w-full">
                <Sidebar />
                <div className="flex-1 h-full">
                    <Outlet />
                </div>
                <Aside />
            </div>
            <EventAddModal />
        </div>
    );
}

export default Main;
