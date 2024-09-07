import classes from "./ChooseDate.module.scss";
import Button from "../Button/Button";
import React, { useContext, useEffect, useRef, useState } from "react";
import Week from "./Week";
import moment from "moment";
import axiosClient from "../../axiosClient";
import _ from "lodash";
import { ModalContext } from "./ChooseLessonsModal";
import Modal from "../Modal";
import { ColorRing } from "react-loader-spinner";
import clsx from "clsx";
import Arrow4 from "../../icon-components/Arrow4";
import { getWeeks } from "./getWeeks";
import { tutorGmail } from "@/common";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const tomorrow = moment(new Date()).add(1, "day");

const ChooseDate = () => {
  const { selectedTime, setStep, submitModal, withEmail, setSelectedDay, withSessionType, setShowModal } =
    useContext(ModalContext);

  const [month, setMonth] = useState(tomorrow);
  const [weeks, setWeeks] = useState([]);

  const loadedDataRef = useRef({});
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState();

  function closeModal(e) {
    setShowModal(false);
  }

  useEffect(() => {
    const fetchMonthDays = async (month) => {
      setError(null);
      try {
        const cachedData = loadedDataRef.current[month.format("YYYY/MM")];
        if (cachedData) {
          return cachedData;
        } else {
          const { data } = await axiosClient.get(`/tutor/events/${tutorGmail}/${month.format("YYYY/MM")}`);
          loadedDataRef.current[month.format("YYYY/MM")] = data;
          return data;
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных месяца:", error);
        setError(error);
      }
    };

    fetchMonthDays(moment(month).add(1, "month"));
    fetchMonthDays(moment(month).subtract(1, "month"));
    setLoading(true);
    fetchMonthDays(month)
      .then((days) => setWeeks(getWeeks(days)))
      .finally(() => setLoading(false));
  }, [month]);

  const nextDisabled = selectedTime === null;

  const calendarClass = clsx({
    [classes.calendar]: true,
    [classes.loading]: loading,
  });

  return (
    <Modal className={classes.modal} wrapperClass={classes.modalWrapper} onCloseClick={closeModal}>
      <div className={classes.header}>
        <p className={classes.title}>Schedule</p>
        <Button className={classes.buttonLeft} variant="icon" onClick={setPrevMonth}>
          <Arrow4 color="#fff" />
        </Button>
        <p className={classes.date}>{month.format("MMMM YYYY")}</p>
        <Button variant="icon" onClick={setNextMonth} className={classes.buttonRight}>
          <Arrow4 color="#fff" />
        </Button>
      </div>
      <p className={classes.selectDateAndTime}>Select a date and time for a lesson.</p>
      <p className={classes.timeNote}>Note: Time is displayed in UTC +1.</p>
      <div className={calendarClass}>
        <div className={classes.row}>
          {days.map((day) => (
            <p key={day} className={classes.dayOfWeek}>
              {day}
            </p>
          ))}
        </div>
        {loading && <Loader />}
        {error && <p className={classes.error}>{error.message}</p>}
        {!loading && weeks.map((week, i) => <Week key={i} week={week} />)}
      </div>
      <div className={classes.buttons}>
        {withSessionType && (
          <Button variant="text" onClick={handleBackClick}>
            Back
          </Button>
        )}
        <Button variant="link" onClick={handleNextClick} disabled={nextDisabled}>
          Next
        </Button>
      </div>
    </Modal>
  );

  function handleBackClick() {
    setStep("sessionType");
  }

  function handleNextClick() {
    if (nextDisabled) {
      return;
    }
    if (withEmail) {
      setStep("email");
      return;
    }

    submitModal();
  }

  function setPrevMonth() {
    setMonth(moment(month.subtract(1, "month")));
  }

  function setNextMonth() {
    setMonth(moment(month.add(1, "month")));
  }
};

const Loader = () => (
  <ColorRing
    wrapperClass={classes.loader}
    height="80"
    width="80"
    colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  />
);

export default ChooseDate;
