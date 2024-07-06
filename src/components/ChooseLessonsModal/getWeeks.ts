import moment, { Moment } from "moment/moment";
import _ from "lodash";

export type Day<T> = {
  date: T;
  time: Time[];
  unavailable?: boolean;
  weekIndex?: number;
};

export type Time = {
  time: number | Moment;
  status: "AVAILABLE" | "UNAVAILABLE" | "BOOKED";
};

export function getWeeks(rawDaysOfMonth: Day<number>[]) {
  let daysOfMonth: Day<Moment>[] = rawDaysOfMonth.map(({ date, time }) => {
    return { date: moment(date), time };
  });

  daysOfMonth = removeDuplicateDays(daysOfMonth);
  const today = moment();
  daysOfMonth.forEach(function (day) {
    if (day.date.isBefore(today)) {
      day.time.forEach((time) => (time.status = "UNAVAILABLE"));
    }
    if (day.time.every((time) => time.status != "AVAILABLE")) {
      day.unavailable = true;
    }
  });

  daysOfMonth.forEach((day) => (day.weekIndex = day.date.isoWeek()));
  const weekToDays = _.groupBy(daysOfMonth, "weekIndex");
  const weekIndexes = _.keys(weekToDays).map(Number);
  const firstWeekIndex = Math.min(...weekIndexes);
  const lastWeekIndex = Math.max(...weekIndexes);
  weekToDays[firstWeekIndex] = padStartArray(weekToDays[firstWeekIndex], 7, null);
  weekToDays[lastWeekIndex] = padEndArray(weekToDays[lastWeekIndex], 7, null);

  return _.values(weekToDays);
}

function removeDuplicateDays(days: Day<Moment>[]) {
  const passedDays = {};
  const result = [];
  days.forEach((day) => {
    if (passedDays[day.date.format("DD")]) return;

    result.push(day);
    passedDays[day.date.format("DD")] = 1;
  });
  return result;
}

function padStartArray<T, V>(array: T[], targetLength: number, padValue: V) {
  const currentLength = array.length;
  const padding = targetLength - currentLength;

  if (padding > 0) {
    return [..._.fill(Array(padding), padValue), ...array];
  }

  return array as (T | V)[];
}

function padEndArray<T, V>(array: T[], targetLength: number, padValue: V) {
  const currentLength = array.length;
  const padding = targetLength - currentLength;

  if (padding > 0) {
    return [...array, ..._.fill(Array(padding), padValue)];
  }

  return array as (T | V)[];
}
