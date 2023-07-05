import React from "react";
import { BiMenu, BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";

import { useAppDispatch, useAppSelector } from "@hooks/reduxWithType";
import { changeViewDate, changeDrilldownView } from "@features/mainSlice";

import Spacing from "@component/common/Spacing";
import CSelect from "../common/CSelect";

import Calendar from "@asset/calendar.png";
import UserProfile from "@asset/user-profile.png";

import { getViewDateObj, getMomentFromViewDate } from "@utils/formattingDate";

import moment from "moment";

import { drilldownViewOptions } from "@utils/optionsData";

function Gnb() {
    const { viewDate, drilldownView } = useAppSelector((state) => state.main);
    const dispatch = useAppDispatch();

    const GNBLeft = () => {
        return (
            <>
                <button className="p-3">
                    <BiMenu size="1.5rem" />
                </button>
                <div className="w-7 h-7">
                    <img src={Calendar} alt="" />
                </div>
                <div className="px-3">
                    <span className="text-xl">캘린더</span>
                </div>
            </>
        );
    };

    const GNBRight = () => {
        return (
            <div className="w-10 h-10 rounded-full overflow-hidden hover:bg-neutral-200">
                <img src={UserProfile} alt="" />
            </div>
        );
    };

    const ChangeMonthBtns = () => {
        return (
            <div className="flex items-center">
                <button
                    onClick={() => dispatch(changeViewDate(getViewDateObj(moment().format())))}
                    className="border rounded px-3.5 py-1.5 border-slate-300"
                >
                    <span className="text-sm">오늘</span>
                </button>
                <Spacing space="mr-2" />
                <button
                    className="px-1"
                    onClick={() => {
                        const momentDate = getMomentFromViewDate(viewDate);
                        const prevMonth = momentDate.subtract(1, "month").startOf("month").format();
                        dispatch(changeViewDate(getViewDateObj(prevMonth)));
                    }}
                >
                    <BiChevronLeft size="1.5rem" title="전 달" />
                </button>
                <button
                    className="px-1"
                    onClick={() => {
                        const momentDate = getMomentFromViewDate(viewDate);
                        const nextMonth = momentDate.add(1, "month").startOf("month").format();

                        dispatch(changeViewDate(getViewDateObj(nextMonth)));
                    }}
                >
                    <BiChevronRight size="1.5rem" title="다음 달" />
                </button>
                <Spacing space="mr-2" />
                <h1 className="text-xl">{`${viewDate.year}년 ${viewDate.month}월`}</h1>
            </div>
        );
    };

    const ChangeCriteriaBtn = () => {
        const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
            const { value } = e.currentTarget;

            if (value === "month" || value === "week" || value === "day") {
                dispatch(changeDrilldownView(value));
            }
        };

        return (
            <div className="flex items-center">
                <button>
                    <HiOutlineSearch />
                </button>
                <Spacing space="mr-3" />
                {/* TODO CSS */}
                <CSelect
                    design="button"
                    defaultValue="month"
                    value={drilldownView || "month"}
                    handleChange={handleSelect}
                    options={drilldownViewOptions}
                />
            </div>
        );
    };

    return (
        <header className="flex justify-between items-center w-full h-14 p-2 border-b">
            <div className="flex items-center flex-none">
                <GNBLeft />
            </div>

            <Spacing space="mr-14" />

            <div className="flex justify-between flex-1">
                <ChangeMonthBtns />
                <ChangeCriteriaBtn />
            </div>

            <Spacing space="ml-8" />

            <div className="flex items-center flex-none">
                <GNBRight />
            </div>
        </header>
    );
}

export default Gnb;
