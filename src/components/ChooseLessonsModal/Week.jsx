import classes from "./ChooseDate.module.scss";
import clsx from "clsx";
import Arrow3 from "../../icon-components/Arrow3";
import { chooseDateStore } from "./ChooseDateStore";
import { observer } from "mobx-react-lite";

const Week = observer(({ week }) => {
  return (
    <>
      <div className={classes.week}>
        {week.map((date, i) => (
          <button
            key={i}
            onClick={(_) => chooseDateStore.setDate(date)}
            className={clsx(classes.day, classes.dayPickable, {
              [classes.weekend]: i >= 5,
              [classes.selectedDate]:
                date && date === chooseDateStore.selectedDate,
            })}
          >
            {date?.format("D")}
            {date && date === chooseDateStore.selectedDate && (
              <Arrow3 color="#000" className={classes.selectedDateArrow} />
            )}
          </button>
        ))}
      </div>
      {week.find((date) => date === chooseDateStore.selectedDate) && (
        <div className={classes.times}>
          {[
            "8 a.m",
            "9 a.m",
            "10 a.m",
            "11 a.m",
            "12 a.m",
            "1 p.m",
            "2 p.m",
            "3 p.m",
            "4 p.m",
            "5 p.m",
            "6 p.m",
            "7 p.m",
            "8 p.m",
            "9 p.m",
          ].map((time) => (
            <button key={time} className={classes.time}>
              {time}
            </button>
          ))}
        </div>
      )}
    </>
  );
});

export default Week;
