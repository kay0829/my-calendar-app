import React from "react";

import { Outlet } from "react-router-dom";

import Gnb from "@component/Main/Gnb";
import Sidebar from "@component/Main/Sidebar";
import Aside from "@component/Main/Aside";

function Main() {
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
        </div>
    )
}

export default Main;