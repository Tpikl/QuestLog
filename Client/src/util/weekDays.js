    import { addDays, startOfWeek } from 'date-fns';

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