import classes from "./ChooseDate.module.scss";
import clsx from "clsx";
import Arrow3 from "../../icon-components/Arrow3";
import { useContext } from "react";
import { ModalContext } from "./ChooseLessonsModal";
import moment from "moment";

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
              [classes.occupiedDay]: day?.occupied,
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
                      [classes.selectedTime]:selectedTime === timeObj.time,
                      [classes.occupied]: timeObj.occupied
                    })}
                    onClick={handleTimeClick(timeObj.time)}
            >
              {(() => {
                const time = moment(timeObj.time);
                return time.format("h") + " "
                  + time.format("a")
                  .split("")
                  .map(c => c + ".")
                  .join(" ");
              })()}
            </button>
          ))}
        </div>
      )}
    </>
  );

  function handleDayClick (day) {
    return function() {
      if (day === null || day.occupied) return;
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
        setSelectedTime(time);
      }
    };
  }
};

export default Week;
