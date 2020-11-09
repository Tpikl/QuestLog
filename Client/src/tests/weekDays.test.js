import { format } from 'date-fns';
import { weekDays, startOfThisWeek, endOfThisWeek } from '../util/weekDays';

const now = new Date();
const DATE_FORMAT = 'yyy-MM-dd';
const nowFormatted = format(now, DATE_FORMAT);
const testWeek = weekDays(now);

function testFormat(date) {
    return format(date, DATE_FORMAT);
};

test('weekDays: Full week of 7 days.', () =>
    expect(testWeek.length).toBe(7));

test('weekDays: This week. Today must exist in array.', () => 
    expect(testFormat(testWeek[now.getDay()])).toBe(nowFormatted));

test('startOfThisWeek: Confirm correct.', () => 
    expect(testFormat(testWeek[0])).toBe(testFormat(startOfThisWeek())));

test('endOfThisWeek: Confirm correct.', () => 
    expect(testFormat(testWeek[6])).toBe(testFormat(endOfThisWeek())));