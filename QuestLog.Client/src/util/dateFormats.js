import { format } from "date-fns";

const DATE_FORMAT = 'yyyy-MM-dd';

export const dateFormat = date =>
    format(date, DATE_FORMAT);

export const weeklyFormat = date =>
    `[${format(date, 'do')}] - ${format(date, 'eeee')}`;
