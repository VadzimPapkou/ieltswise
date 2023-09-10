import classes from "./ChooseDate.module.scss";
import Button from "../Button/Button";
import Arrow3 from "../../icon-components/Arrow3";

import { getWeeks } from "./ChooseDateUtils";
import { useRef, useState } from "react";
import moment from "moment";
import Week from "./Week";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const today = moment(new Date());

const ChooseDate = ({ setStep }) => {
  const dateRef = useRef(moment(today));
  const forceUpdate = useForceUpdate();
  const weeks = getWeeks(dateRef.current);

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
        <p className={classes.date}>{dateRef.current.format("MMMM YYYY")}</p>
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
        {weeks.map((week) => (
          <Week key={week} week={week} />
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
    dateRef.current.subtract(1, "month");
    forceUpdate();
  }

  function setNextMonth() {
    dateRef.current.add(1, "month");
    forceUpdate();
  }
};

function useForceUpdate() {
  const [v, sV] = useState(0);
  return () => sV(v + 1);
}

export default ChooseDate;
