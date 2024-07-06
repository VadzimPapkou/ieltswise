import classes from "./ChooseDate.module.scss";
import clsx from "clsx";
import Arrow3 from "../../icon-components/Arrow3";
import { useContext } from "react";
import { ModalContext } from "./ChooseLessonsModal";
import moment from "moment";
import { Day, Time } from "@/components/ChooseLessonsModal/getWeeks";
import { Moment } from "moment/moment";

const Week = ({ week }: { week: Day<Moment>[] }) => {
  const { selectedDay, setSelectedDay, selectedTime, setSelectedTime } = useContext<{
    selectedDay: Day<Moment>;
    [key: string]: any;
  }>(ModalContext as any);

  return (
    <>
      <div className={classes.week}>
        {week.map((day, i) =>
          !day ? (
            <div key={i} className={classes.dummyDay}></div>
          ) : (
            <button
              key={i}
              onClick={handleDayClick(day)}
              className={clsx(classes.day, {
                [classes.weekend]: i >= 5,
                [classes.occupiedDay]: day?.unavailable,
                [classes.selectedDate]: day && day === selectedDay,
              })}
            >
              {day?.date?.format("D")}
              <Arrow3 color="#000" className={classes.selectedDateArrow} />
            </button>
          )
        )}
      </div>
      {week.find((day) => day === selectedDay) && (
        <div className={classes.times}>
          {selectedDay.time
            .filter((time) => time.status !== "UNAVAILABLE")
            .map((timeObj) => (
              <button
                key={+timeObj.time}
                className={clsx({
                  [classes.time]: true,
                  [classes.selectedTime]: selectedTime === timeObj.time,
                  [classes.occupied]: timeObj.status === "BOOKED",
                })}
                onClick={handleTimeClick(timeObj)}
              >
                {(() => {
                  const time = moment(timeObj.time);
                  return (
                    time.format("h") +
                    " " +
                    time
                      .format("a")
                      .split("")
                      .map((c) => c + ".")
                      .join(" ")
                  );
                })()}
              </button>
            ))}
        </div>
      )}
    </>
  );

  function handleDayClick(day: Day<Moment>) {
    return function () {
      if (day === null || day.unavailable) return;
      setSelectedTime(null);
      if (day === selectedDay) setSelectedDay(null);
      else {
        setSelectedDay(day);
      }
    };
  }

  function handleTimeClick(timeObj: Time) {
    return function () {
      if (timeObj.status !== "AVAILABLE") {
        return;
      }
      if (selectedTime === timeObj.time) {
        setSelectedTime(null);
      } else {
        setSelectedTime(timeObj.time);
      }
    };
  }
};

export default Week;
