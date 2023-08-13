import moment from "moment";

moment.locale("en", {
  week: {
    dow: 1,
  },
});

export function getWeeks(d) {
  const startDate = moment(d).startOf("month");

  let daysOfMonth = [];
  let date = moment(startDate);
  while (date.month() === startDate.month()) {
    daysOfMonth.push(moment(date));
    date.add(1, "day");
  }
  daysOfMonth = daysOfMonth.map((day) => [day, day.week()]);
  const weekToDays = {};
  let counter = 0;
  daysOfMonth.forEach(([day, week]) => {
    if (weekToDays[week]) {
      weekToDays[week].days.push(day);
    } else {
      weekToDays[week] = { index: counter++, days: [day] };
    }
  });
  let weeks = Object.values(weekToDays)
    .sort((a, b) => (a.index > b.index ? 1 : -1))
    .map((x) => x.days);
  if (weeks[0].length < 7) {
    weeks[0] = [...new Array(7 - weeks[0].length).fill(null)].concat(weeks[0]);
  }
  const lastWeek = weeks[weeks.length - 1];
  if (lastWeek.length < 7) {
    weeks[weeks.length - 1] = lastWeek.concat([
      ...new Array(7 - lastWeek.length).fill(null),
    ]);
  }
  return weeks;
}
