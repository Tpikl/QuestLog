import { addDays, startOfWeek } from 'date-fns';

export const weekDays = (date) => {
    let days = []
    let startDay = startOfWeek(date);

    for (let i = 0; i < 7; i++) {
        days.push(addDays(startDay, i));
    }
    return days;
}

export const startOfThisWeek = () => startOfWeek(new Date());
export const endOfThisWeek = () => addDays(startOfWeek(new Date()), 7);