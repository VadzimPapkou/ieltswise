import classes from "./ChooseDate.module.scss";
import Button from "../Button/Button";
import Arrow3 from "../../icon-components/Arrow3";
import { useEffect, useState } from "react";
import Week from "./Week";
import moment from "moment";
import axiosClient from "../../axiosClient";
import _ from "lodash";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ChooseDate = ({ setStep }) => {
  const [month, setMonth] = useState(moment(new Date()));
  useEffect(() => {
    axiosClient.get("/tutor/events/test.tutor1.ieltswise67@gmail.com/" + month.format("YYYY/MM"))
      .then(response => setWeeks(getWeeks(response.data)));
  }, [month]);
  const [weeks, setWeeks] = useState([]);

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className={classes.chooseDate}>
      <div className={classes.header}>
        <p className={classes.title}>Schedule</p>
        <Button
          className={classes.buttonLeft}
          variant="icon"
          onClick={setPrevMonth}
        >
          <Arrow3 color="#fff" />
        </Button>
        <p className={classes.date}>{month.format("MMMM YYYY")}</p>
        <Button variant="icon" onClick={setNextMonth} className={classes.buttonRight}>
          <Arrow3 color="#fff" />
        </Button>
      </div>
      <div className={classes.calendar}>
        <div className={classes.row}>
          {days.map((day) => (
            <p key={day} className={classes.day}>
              {day}
            </p>
          ))}
        </div>
        {weeks.map((week, i) => (
          <Week key={i} week={week} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        ))}
      </div>
      <div className={classes.buttons}>
        <Button variant="text" onClick={handleBackClick}>
          Back
        </Button>
        <Button variant="link" onClick={handleNextClick} disabled={true}>
          Next
        </Button>
      </div>
    </div>
  );

  function handleBackClick() {
    setStep("sessionType");
  }

  function handleNextClick() {}

  function setPrevMonth() {
    setMonth(moment(month.subtract(1, "month")));
  }

  function setNextMonth() {
    setMonth(moment(month.add(1, "month")));
  }
};

function useForceUpdate() {
  const [v, sV] = useState(0);
  return () => sV(v + 1);
}

function getWeeks(daysOfMonth) {
  daysOfMonth.forEach(day => day.date = moment(day.date));
  daysOfMonth = removeDuplicateDays(daysOfMonth);

  daysOfMonth.forEach(day => day.weekIndex = day.date.isoWeek());
  const weekToDays = _.groupBy(daysOfMonth, "weekIndex");
  const weekIndexes = _.keys(weekToDays).map(Number);
  const firstWeekIndex = Math.min(...weekIndexes);
  const lastWeekIndex = Math.max(...weekIndexes);
  weekToDays[firstWeekIndex] = padStartArray(weekToDays[firstWeekIndex], 7, null);
  weekToDays[lastWeekIndex] = padEndArray(weekToDays[lastWeekIndex], 7, null);

  const result = _.values(weekToDays);
  console.log(result);
  return result
}

function removeDuplicateDays(days) {
  const passedDays = {};
  const result = [];
  days.forEach(day => {
    if(passedDays[day.date.format("DD")]) return;

    result.push(day);
    passedDays[day.date.format("DD")] = 1;
  });
  return result;
}

function padStartArray(array, targetLength, padValue) {
  const currentLength = array.length;
  const padding = targetLength - currentLength;

  if (padding > 0) {
    return [..._.fill(Array(padding), padValue), ...array];
  }

  return array;
}

function padEndArray(array, targetLength, padValue) {
  const currentLength = array.length;
  const padding = targetLength - currentLength;

  if (padding > 0) {
    return [...array, ..._.fill(Array(padding), padValue)];
  }

  return array;
}

export default ChooseDate;
