import { format, addDays, startOfWeek, getDaysInMonth, startOfMonth } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';

export const weekDays = (date) => {
    let days = []
    let startDay = startOfWeek(date);

    for (let i = 0; i < 7; i++) {
        days.push(addDays(startDay, i));
    }
    return days;
}
export const monthDays = (date) => {
    let days = [];
    let startDay = startOfMonth(date);
    for(var i = 0; i < getDaysInMonth(startDay); i++) {
        days.push(addDays(startDay, i));
    }
    return days;
}

export const dateFormat = date => format(date, DATE_FORMAT)
export const weeklyFormat = date => `[${format(date, 'do')}] - ${format(date, 'eeee')}`;