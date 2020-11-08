import { addDays, startOfWeek } from 'date-fns';

export const WeekDays = () => {
    let weekDays = []
    let startDay = startOfWeek(new Date());

    for (let i = 0; i < 7; i++) {
        weekDays.push(addDays(startDay, i));
    }
    return weekDays;
}