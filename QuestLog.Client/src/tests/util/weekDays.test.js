import { weekDays, startOfThisWeek, endOfThisWeek, dateFormat } from '../../util/weekDays';

const now = new Date();
const nowFormatted = dateFormat(now);
const testWeek = weekDays(now);

test('weekDays: Full week of 7 days.', () =>
    expect(testWeek.length).toBe(7)
);

test('weekDays: This week. Today must exist in array.', () => 
    expect(dateFormat(testWeek[now.getDay()])).toBe(nowFormatted)
);

test('startOfThisWeek: Confirm correct.', () => 
    expect(dateFormat(testWeek[0])).toBe(dateFormat(startOfThisWeek(now)))
);

test('endOfThisWeek: Confirm correct.', () => 
    expect(dateFormat(testWeek[6])).toBe(dateFormat(endOfThisWeek(now)))
);