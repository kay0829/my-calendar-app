import React from "react";


import Gnb from "@component/Main/Gnb";
import Sidebar from "@component/Main/Sidebar";

function Main() {
    return (
        <div className="box-border font-sans text-primary w-screen h-screen flex flex-col">
            <Gnb />
            <div className="flex-1 flex w-full">
                <Sidebar />
            </div>
        </div>
    )
}

export default Main;