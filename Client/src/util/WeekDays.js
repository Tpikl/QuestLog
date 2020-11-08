import { addDays, startOfWeek } from 'date-fns';

export const WeekDays = (date) => {
    let weekDays = []
    let startDay = startOfWeek(date);

    for (let i = 0; i < 7; i++) {
        weekDays.push(addDays(startDay, i));
    }
    return weekDays;
}

export const StartOfThisWeek = () => startOfWeek(new Date());
export const EndOfThisWeek = () => addDays(startOfWeek(new Date()), 7);