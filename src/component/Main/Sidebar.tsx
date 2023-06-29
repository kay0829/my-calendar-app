import React from "react";

import { GoTriangleDown } from "react-icons/go";

import Plus from "@asset/plus.svg";
import MiniCalendar from "./MiniCalendar";

function Sidebar() {
    return (
        <div className="w-64 h-full px-2 border-r">
            <div className="h-17 py-2">
                <button className="flex justify-between items-center w-36 h-12 px-4 border rounded-3xl shadow-md shadow-slate-400">
                    <div className="pr-3">
                        <img src={Plus} alt="" />
                    </div>
                    <span className="text-sm">만들기</span>
                    <GoTriangleDown color="#62676b" />
                </button>
            </div>
            <MiniCalendar />
        </div>
    );
}

export default Sidebar;
