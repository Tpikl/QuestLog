import { format, endOfWeek, startOfWeek } from "date-fns";

const BASE_FORMAT = 'yyyy-MM-dd';
const WEEKLY_FORMAT = '[do] - eeee';
const MONTHLY_FORMAT = 'MMMM, yyyy';

//---------------------------------------------------

export const baseFormat = date =>
    format(date, BASE_FORMAT);

export const weeklyFormat = date =>
    format(date, WEEKLY_FORMAT);

export const weeklySpreadFormat = date =>
    `${format(date, 'MMM do')} - ${format(endOfWeek(date), 'do, yyyy')}`;

export const shortWeeklyFormat = date =>
    `${format(startOfWeek(date), 'do')} - ${format(endOfWeek(date), 'do')}`;

export const monthlyFormat = date =>
    format(date, MONTHLY_FORMAT);