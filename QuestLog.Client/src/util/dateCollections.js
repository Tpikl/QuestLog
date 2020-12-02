import { addDays, startOfWeek, getDaysInMonth, startOfMonth, addMonths, addWeeks, getWeeksInMonth } from 'date-fns';

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


export const monthsByCount = (date, count) => {
    let months = [];
    date = startOfMonth(date);
    for (let i=0; i < count; i++)
        months.push(addMonths(date, i));
    return months;
}

export const monthWeeks = date => {
    let weeks = [];
    let month = date.getMonth();
    let weekCount = getWeeksInMonth(date);
    date = startOfWeek(startOfMonth(date));
    for (let i=0; i<weekCount;i++)
    {
        let thisWeek = addWeeks(date, i);
        if (i === 0 || i === weekCount-1)
            // Wednesday decides which month the first/last weeks belong to.
            if (month !== addDays(thisWeek, 3).getMonth())
                continue;
        weeks.push(thisWeek);
    }
    return weeks;
}