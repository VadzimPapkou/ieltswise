import classes from "./ChooseDate.module.scss";
import clsx from "clsx";
import Arrow3 from "../../icon-components/Arrow3";
import { useContext } from "react";
import { ModalContext } from "./ChooseLessonsModal";

const Week = ({ week }) => {

  const { selectedDay, setSelectedDay, selectedTime, setSelectedTime } = useContext(ModalContext);

  return (
    <>
      <div className={classes.week}>
        {week.map((day, i) => (
          <button
            key={i}
            onClick={handleDayClick(day)}
            className={clsx(classes.day, classes.dayPickable, {
              [classes.weekend]: i >= 5,
              [classes.selectedDate]:
              day && day === selectedDay
            })}
          >
            {day?.date?.format("D")}
            {day && day === selectedDay && (
              <Arrow3 color="#000" className={classes.selectedDateArrow} />
            )}
          </button>
        ))}
      </div>
      {week.find((day) => day === selectedDay) && (
        <div className={classes.times}>
          {selectedDay.time.map((timeObj) => (
            <button key={timeObj.time}
                    className={clsx({
                      [classes.time]: true,
                      [classes.selectedTime]: selectedTime?.time === timeObj.time,
                      [classes.occupied]: timeObj.occupied
                    })}
                    onClick={handleTimeClick(timeObj.time)}
            >
              {timeObj.time}
            </button>
          ))}
        </div>
      )}
    </>
  );

  function handleDayClick (day) {
    return function() {
      setSelectedTime(null);
      if (day === selectedDay) setSelectedDay(null);
      else {
        setSelectedDay(day);
      }
    };
  }

  function handleTimeClick (time) {
    return function() {
      if (selectedTime === time) {
        setSelectedTime(null);
      } else {
        setSelectedTime({ time, day: selectedDay.date });
      }
    };
  }
};

export default Week;
