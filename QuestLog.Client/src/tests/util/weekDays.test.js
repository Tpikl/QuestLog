import { endOfWeek, startOfWeek } from 'date-fns';
import { dateFormat } from '../../util/dateFormats';
import { weekDays } from '../../util/weekDays';

const now = new Date();
const nowFormatted = dateFormat(now);
const testWeek = weekDays(now);

test('weekDays: Full week of 7 days.', () =>
    expect(testWeek.length).toBe(7)
);

test('weekDays: This week. Today must exist in array.', () =>
    expect(dateFormat(testWeek[now.getDay()])).toBe(nowFormatted)
);

test('weekDays: Confirm first day of week is correct.', () =>
    expect(dateFormat(testWeek[0])).toBe(dateFormat(startOfWeek(now)))
);

test('weekDays: Confirm last day of week is correct.', () =>
    expect(dateFormat(testWeek[6])).toBe(dateFormat(endOfWeek(now)))
);