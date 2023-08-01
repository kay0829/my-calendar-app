import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IViewDate = {
    year: string,
    month: string,
    date: string,
};
type IDrilldownView = "month" | "week" | "work_week" | "day" | "agenda";
type INewEvent = {
    id: number,
    allDay?: boolean | undefined,
    title?: React.ReactNode | undefined,
    start?: Date | undefined,
    end?: Date | undefined,
    resource?: any,
};

interface MainState {
    viewDate: IViewDate;
    drilldownView: IDrilldownView | null | undefined;
    isOpen: boolean;
    newEvent: INewEvent;
    events: Array<any>;
}

const initialState: MainState = {
    viewDate: {
        year: "",
        month: "",
        date: "",
    },
    drilldownView: "month",
    isOpen: false,
    events: [],
    newEvent: {
        id: 0,
    },
};

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        changeViewDate(state, action: PayloadAction<IViewDate>) {
            state.viewDate = action.payload;
        },
        changeDrilldownView(state, action: PayloadAction<IDrilldownView | null | undefined>) {
            state.drilldownView = action.payload;
        },
        openModal(state) {
            state.isOpen = true;
        },
        closeModal(state) {
            state.isOpen = false;
        },
        setNewEvent(state, action: PayloadAction<INewEvent>) {
            state.newEvent = action.payload;
        },
    },
});

export const { changeViewDate, changeDrilldownView, openModal, closeModal, setNewEvent } = mainSlice.actions;
export default mainSlice.reducer;
