import moment from "moment";

/**
 * Main Calendar에서 각 이벤트 시작 날짜 string을 만드는 함수
 * @param {Date | undefined} date 이벤트 시작 날짜
 * @returns {string} 오전 6시 또는 오후 6:30 등의 형태
 */
export const formattingTime = (date: Date | undefined): string => {
    if (!date) {
        return '';
    }

    let time = '';

    const hour = date.getHours();
    const minute = date.getMinutes();

    if (hour - 12 < 0) {
        time += `오전 ${hour}`
    } else {
        time += `오후 ${hour - 12}`
    }

    if (minute === 0) {
        time += `시 `
    } else {
        time += `:${minute} `
    }

    return time;
}

/**
 * Main Calendar에서 이벤트 시작 날짜와 끝나는 날짜가 같은지 다른지를 반환하는 함수
 * @param {Date | undefined} start 이벤트 시작 날짜
 * @param {Date | undefined} end 이벤트 마무리 날짜
 * @returns {boolean}  이벤트 시작 날짜와 끝나는 날짜가 같은지 다른지 여부
 */
export const isAnotherDate = (start: Date | undefined, end: Date | undefined): boolean => {
    if (!start || !end) {
        return false;
    }

    const startDate = start.getDate();
    const endDate = end.getDate();

    return startDate !== endDate;
}

type IViewDate = { year: string, month: string, date: string };
/**
 * 전역적으로 사용할 date().format()을 { year, month, date } 형태로 바꿔 반환하는 함수
 * @param {string} date moment().format() 형태의 string
 * @returns main state의 viewDate 형태
 */
export const getViewDateObj = (isoDate: string): IViewDate => {
    let temp = moment(isoDate);

    const year = temp.year().toString();
    const month = (temp.month() + 1).toString();
    const date = temp.date().toString();

    return { year, month, date };
}

/**
 * 전역적으로 사용할 { year, month, date } 를 moment 타입으로 바꿔 반환하는 함수
 * @param viewDate main state의 viewDate 형태
 * @returns Moment 객체
 */
export const getMomentFromViewDate = (viewDate: IViewDate): moment.Moment => {
    const { year, month, date } = viewDate;

    return moment(`${year}-${month}-${date}`);
}

/**
 * 전역적으로 사용할 { year, month, date } 를 moment 타입으로 바꿔 반환하는 함수
 * @param viewDate main state의 viewDate 형태
 * @returns Date 객체
 */
export const getDateFromViewDate = (viewDate: IViewDate): Date => {
    const { year, month, date } = viewDate;

    if (!year || !month || !date) {
        return new Date();
    }

    return new Date(`${year}-${month}-${date}`);
}

/**
 * 전역적으로 사용할 url pathDate와 staet의 viewDate가 같은지 다른지 여부를 반환하는 함수
 * @param viewDate main state의 viewDate
 * @param pathDate url 의 pathDate
 * @returns {boolean}
 */
export const isDiffBetweenViewDateAndPathDate = (viewDate: IViewDate, pathDate: IViewDate): boolean => {
    return (
        viewDate.year !== pathDate.year 
        || viewDate.month !== pathDate.month 
        || viewDate.date !== pathDate.date
    );
}