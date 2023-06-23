import React from "react";


import Gnb from "@component/Main/Gnb";
import Sidebar from "@component/Main/Sidebar";
import Aside from "@component/Main/Aside";

function Main() {
    return (
        <div className="box-border font-sans text-primary w-screen h-screen flex flex-col">
            <Gnb />
            <div className="flex-1 flex w-full">
                <Sidebar />
                <Aside />
            </div>
        </div>
    )
}

export default Main;