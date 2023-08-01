import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@hooks/reduxWithType";
import { closeModal } from "@features/mainSlice";

import CCheckBox from "@/component/common/CCheckBox";
import CSelect from "@/component/common/CSelect";

import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineWatchLater, MdCalendarMonth } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { LuEqual } from "react-icons/lu";

import moment from "moment";
import "moment/locale/ko";

import { timeOptions } from "@/utils/optionsData";

function EventAddModal() {
    const { isOpen, newEvent } = useAppSelector((state) => state.main);
    const { start } = newEvent;
    const dispatch = useAppDispatch();

    const [eventTitle, setEventTitle] = useState("");
    const [isDateClicked, setIsDateClicked] = useState(false);
    const [isAllDayChecked, setIsAllDayChecked] = useState(false);
    const [selectedStartTime, setSelectedStartTime] = useState("00:00");
    const [selectedEndTime, setSelectedEndTime] = useState("01:00");

    return (
        <section
            className={`${
                isOpen ? "flex" : "hidden"
            } flex-col fixed top-0 left-0 w-112 h-130 drop-shadow-lg rounded-lg bg-white z-40 transition ease-in-out delay-150`}
        >
            <header className="flex items-center justify-between p-3 h-fit">
                <button onClick={() => {}}>
                    <LuEqual size={"1.5rem"} />
                </button>
                <button onClick={() => dispatch(closeModal())}>
                    <IoCloseOutline size={"1.5rem"} />
                </button>
            </header>
            <main className="flex-1">
                <div className="flex justify-center p-2">
                    <div className="w-14"></div>
                    <input
                        type="text"
                        placeholder="제목 및 시작 추가"
                        className="flex-1 border-b border-slate-300 text-xl focus:outline-none focus:border-b focus:border-blue-600"
                        value={eventTitle}
                        onChange={(e) => {
                            const { value } = e.target;
                            setEventTitle(value);
                        }}
                    />
                </div>
                <div className="flex justify-center p-2 text-neutral-500 text-sm">
                    <div className="flex justify-center items-center w-14">
                        <MdOutlineWatchLater size={"1.3rem"} />
                    </div>
                    {isDateClicked ? (
                        <div className="flex-1 flex justify-between items-center py-2">
                            <div className="mb-2">
                                <div className="flex mb-2">
                                    <span className="mr-2 transition cursor-pointer ease-in-out delay-50 hover:border-b hover:border-neutral-800">
                                        {moment(start).format("M월 D일 (dddd)")}
                                    </span>
                                    {isAllDayChecked ? (
                                        <>
                                            <span className="mr-2">-</span>
                                            <span className="mr-2 transition cursor-pointer ease-in-out delay-50 hover:border-b hover:border-neutral-800">
                                                {moment(start).format("M월 D일 (dddd)")}
                                            </span>
                                        </>
                                    ) : (
                                        <div>
                                            <CSelect
                                                design="underline"
                                                defaultValue="00:00"
                                                value={selectedStartTime}
                                                handleChange={(e) => {
                                                    const { value } = e.currentTarget;
                                                    setSelectedStartTime(value);
                                                }}
                                                options={timeOptions}
                                            />
                                            <span className="mr-2"> ~ </span>
                                            <CSelect
                                                design="underline"
                                                defaultValue="01:00"
                                                value={selectedEndTime}
                                                handleChange={(e) => {
                                                    const { value } = e.currentTarget;
                                                    setSelectedEndTime(value);
                                                }}
                                                options={timeOptions.slice(
                                                    timeOptions.findIndex((v) => v.value === selectedStartTime) + 4,
                                                )}
                                            />
                                        </div>
                                    )}
                                </div>
                                <CCheckBox isChecked={isAllDayChecked} setIsChecked={setIsAllDayChecked} label="종일" />
                            </div>
                        </div>
                    ) : (
                        <div
                            className="flex-1 flex justify-between items-center py-2 cursor-pointer hover:bg-amber-50"
                            onClick={() => setIsDateClicked(true)}
                        >
                            <div className="mb-2">
                                <span className="mr-2 transition cursor-pointer ease-in-out delay-50 hover:border-b hover:border-neutral-800">
                                    {moment(start).format("M월 D일 (dddd)")}
                                </span>
                                <span className="mr-2">-</span>
                                <span className="mr-2 transition cursor-pointer ease-in-out delay-50 hover:border-b hover:border-neutral-800">
                                    {moment(start).format("M월 D일 (dddd)")}
                                </span>
                            </div>
                            <button className="w-14 h-6 border border-neutral-300">
                                <span className="text-xs">시간 추가</span>
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex p-2">
                    <div className="w-14"></div>
                    <button>
                        <span className="text-sm text-blue-500 hover:text-blue-700">시간 찾기</span>
                    </button>
                </div>
                <div className="flex p-2 text-sm">
                    <div className="flex justify-center items-center w-14">
                        <HiOutlineMenuAlt2 />
                    </div>
                    <button>
                        <span className="mr-2 transition cursor-pointer ease-in-out delay-50 hover:border-b hover:border-neutral-800">
                            설명
                        </span>
                        <span className="mr-2">또는</span>
                        <span className="mr-2 transition cursor-pointer ease-in-out delay-50 hover:border-b hover:border-neutral-800">
                            첨부파일
                        </span>
                        <span className="mr-2">추가</span>
                    </button>
                </div>
                <div className="flex p-2 text-sm">
                    <div className="flex justify-center items-center w-14">
                        <MdCalendarMonth />
                    </div>
                    <button className="flex items-center">
                        <span className="mr-2 transition cursor-pointer ease-in-out delay-50 hover:border-b hover:border-neutral-800">
                            임정열
                        </span>
                        <div className="w-4 h-4 bg-first rounded-full"></div>
                    </button>
                </div>
            </main>
            <footer className="flex items-center justify-end h-12 p-3">
                <button className="mr-2">
                    <span className="text-sm text-neutral-400 hover:text-neutral-600">옵션 더보기</span>
                </button>
                <button className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-700">
                    <span className="text-white text-sm">저장</span>
                </button>
            </footer>
        </section>
    );
}

export default EventAddModal;
