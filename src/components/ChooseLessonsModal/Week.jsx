import classes from "./ChooseDate.module.scss";
import clsx from "clsx";
import Arrow3 from "../../icon-components/Arrow3";

const Week = ({ week, selectedDate, setSelectedDate }) => {

  return (
    <>
      <div className={classes.week}>
        {week.map((day, i) => (
          <button
            key={i}
            onClick={(_) => setSelectedDate(day)}
            className={clsx(classes.day, classes.dayPickable, {
              [classes.weekend]: i >= 5,
              [classes.selectedDate]:
              day && day === selectedDate
            })}
          >
            {day?.date?.format("D")}
            {day && day === selectedDate && (
              <Arrow3 color="#000" className={classes.selectedDateArrow} />
            )}
          </button>
        ))}
      </div>
      {week.find((day) => day === selectedDate) && (
        <div className={classes.times}>
          {selectedDate.time.map((timeObj) => (
            <button key={timeObj.time}
                    className={clsx({
                      [classes.time]: true,
                      [classes.occupied]: timeObj.occupied
                    })}
            >
              {timeObj.time}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Week;
