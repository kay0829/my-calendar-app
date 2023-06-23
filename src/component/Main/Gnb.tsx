import React from "react";
import { BiMenu, BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';

import Spacing from "@component/common/Spacing";

import Calendar from "@asset/calendar.png";
import UserProfile from "@asset/user-profile.png";

function Gnb() {
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
        )
    }

    const GNBRight = () => {
        return (
            <div className="w-10 h-10 rounded-full overflow-hidden hover:bg-neutral-200">
                <img src={UserProfile} alt="" />
            </div>
        )
    }

    const ChangeMonthBtns = () => {
        return (
            <div className="flex items-center">
                <button className="border rounded px-3.5 py-1.5 border-slate-300">
                    <span className="text-sm">오늘</span>
                </button>
                <Spacing space="mr-2"/>
                <button className="px-1">
                    <BiChevronLeft size="1.5rem" title="전 달"/>
                </button>
                <button className="px-1">
                    <BiChevronRight size="1.5rem" title="다음 달" />
                </button>
                <Spacing space="mr-2"/>
                <span className="text-xl">2023년 6월</span>
            </div>
        )
    }

    const ChangeCriteriaBtn = () => {
        return (
            <div className="flex items-center">
                <button>
                    <HiOutlineSearch />
                </button>
                <Spacing space="mr-3"/>
                {/* TODO */}
                <select defaultValue="월" className="border rounded px-3 py-1 border-slate-300 font-sm">
                    <option value="월">월</option>
                    <option value="주">주</option>
                    <option value="일">일</option>
                </select>
            </div>
        )
    }

    return (
        <div className="flex justify-between items-center w-full h-14 p-2 border-b">
            <div className="flex items-center flex-none">
                <GNBLeft />
            </div>

            <Spacing space="mr-14"/>

            <div className="flex justify-between flex-1">
                <ChangeMonthBtns />
                <ChangeCriteriaBtn />
            </div>

            <Spacing space="ml-8"/>

            <div className="flex items-center flex-none">
                <GNBRight />
            </div>
        </div>
    )
}

export default Gnb;