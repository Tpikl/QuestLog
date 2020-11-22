import { format, addDays, startOfWeek } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';

export const weekDays = (date) => {
    let days = []
    let startDay = startOfWeek(date);

    for (let i = 0; i < 7; i++) {
        days.push(addDays(startDay, i));
    }
    return days;
}

export const startOfThisWeek = date => startOfWeek(date);
export const endOfThisWeek = date => addDays(startOfWeek(date), 6);

export const dateFormat = date => format(date, DATE_FORMAT)
export const weeklyFormat = date => `[${format(date, 'do')}] - ${format(date, 'eeee')}`;