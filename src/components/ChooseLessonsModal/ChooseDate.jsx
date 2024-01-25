import classes from "./ChooseDate.module.scss";
import Button from "../Button/Button";
import Arrow3 from "../../icon-components/Arrow3";
import { useContext, useEffect, useRef, useState } from "react";
import Week from "./Week";
import moment from "moment";
import axiosClient from "../../axiosClient";
import _ from "lodash";
import { ModalContext } from "./ChooseLessonsModal";
import Modal from "../Modal";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ChooseDate = ({close}) => {
  const [month, setMonth] = useState(moment(new Date()));
  const [weeks, setWeeks] = useState([]);
  const loadedDataRef = useRef({});

  useEffect(() => {
    const fetchMonthDays = async (month) => {
      try {
        const cachedData = loadedDataRef.current[month.format("YYYY/MM")];
        if (cachedData) {
          return cachedData
        } else {
          const { data } = await axiosClient.get(`/tutor/events/test.tutor1.ieltswise67@gmail.com/${month.format("YYYY/MM")}`);
          loadedDataRef.current[month.format("YYYY/MM")] = data;
          return data;
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных месяца:", error);
      }
    };

    fetchMonthDays(moment(month).add(1, "month"));
    fetchMonthDays(moment(month).subtract(1, "month"));
    fetchMonthDays(month).then(days => setWeeks(getWeeks(days)))
  }, [month]);

  const { selectedTime, setStep, submitModal, withEmail } = useContext(ModalContext);

  const nextDisabled = selectedTime === null;

  return (
    <Modal className={classes.modal} onCloseClick={close}>
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
          <Week key={i} week={week}
          />
        ))}
      </div>
      <div className={classes.buttons}>
        <Button variant="text" onClick={handleBackClick}>
          Back
        </Button>
        <Button variant="link" onClick={handleNextClick} disabled={nextDisabled}>
          Next
        </Button>
      </div>
    </Modal>
  );

  function handleBackClick () {
    setStep("sessionType");
  }

  function handleNextClick () {
    if(nextDisabled) {
      return;
    }
    if(withEmail) {
      setStep("email");
      return;
    }

    submitModal(selectedTime);
  }

  function setPrevMonth () {
    setMonth(moment(month.subtract(1, "month")));
  }

  function setNextMonth () {
    setMonth(moment(month.add(1, "month")));
  }
};

function getWeeks (daysOfMonth) {
  daysOfMonth.forEach(day => day.date = moment(day.date));
  daysOfMonth = removeDuplicateDays(daysOfMonth);
  const today = moment();
  daysOfMonth.forEach(function(day) {
    if(day.date.isBefore(today)) {
      day.time.forEach(time => time.occupied = true);
    }
    if(day.time.every(time => time.occupied)) {
      day.occupied = true;
    }
  });

  daysOfMonth.forEach(day => day.weekIndex = day.date.isoWeek());
  const weekToDays = _.groupBy(daysOfMonth, "weekIndex");
  const weekIndexes = _.keys(weekToDays).map(Number);
  const firstWeekIndex = Math.min(...weekIndexes);
  const lastWeekIndex = Math.max(...weekIndexes);
  weekToDays[firstWeekIndex] = padStartArray(weekToDays[firstWeekIndex], 7, null);
  weekToDays[lastWeekIndex] = padEndArray(weekToDays[lastWeekIndex], 7, null);
  console.log(weekToDays);
  return _.values(weekToDays);
}

function removeDuplicateDays (days) {
  const passedDays = {};
  const result = [];
  days.forEach(day => {
    if (passedDays[day.date.format("DD")]) return;

    result.push(day);
    passedDays[day.date.format("DD")] = 1;
  });
  return result;
}

function padStartArray (array, targetLength, padValue) {
  const currentLength = array.length;
  const padding = targetLength - currentLength;

  if (padding > 0) {
    return [..._.fill(Array(padding), padValue), ...array];
  }

  return array;
}

function padEndArray (array, targetLength, padValue) {
  const currentLength = array.length;
  const padding = targetLength - currentLength;

  if (padding > 0) {
    return [...array, ..._.fill(Array(padding), padValue)];
  }

  return array;
}

export default ChooseDate;
