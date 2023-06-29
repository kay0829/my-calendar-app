import moment from 'moment';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IViewDate = {
    year: string;
    month: string;
    date: string;
}
type IDrilldownView = 'month' | 'week' | 'work_week' | 'day' | 'agenda';
interface MainState {
    viewDate: IViewDate;
    drilldownView: IDrilldownView | null | undefined;
}

const initialState: MainState = {
    viewDate: {
        year: '',
        month: '',
        date: '',        
    },
    drilldownView: 'month',
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeViewDate(state, action: PayloadAction<IViewDate>) {
            state.viewDate = action.payload;
        },
        changeDrilldownView(state, action: PayloadAction<IDrilldownView | null | undefined>) {
            state.drilldownView = action.payload;
        }
    }
})

export const { changeViewDate, changeDrilldownView } = mainSlice.actions;
export default mainSlice.reducer;