import React, { useState } from "react";
import ChooseLessonsModal from "../ChooseLessonsModal";
import BookStatusModal from "../BookStatusModal";
import Button from "../Button/Button";
import moment from "moment";
import axiosClient from "../../axiosClient";

export function BookFreeChatButton({ setError, setLoading = () => {}, defaultSessionType, ...buttonProps }) {
  const [showLessonsModal, setShowLessonsModal] = useState(false);
  const [showBookModal, setShowBookModal] = useState(false);
  const [bookResponse, setBookResponse] = useState();

  return (
    <>
      {showLessonsModal && (
        <ChooseLessonsModal
          withEmail={true}
          withSessionType={false}
          defaultSessionType={defaultSessionType}
          setShow={setShowLessonsModal}
          onSubmitModal={handleSubmitModal}
        />
      )}
      {showBookModal && <BookStatusModal response={bookResponse} setShow={setShowBookModal} />}
      <Button {...buttonProps} variant="primary" onClick={() => setShowLessonsModal(true)}>
        Book a Free Chat
      </Button>
    </>
  );

  async function handleSubmitModal({ selectedTime, sessionType, email }) {
    const startDate = moment(selectedTime);
    let endDate = moment(startDate).add(59, "minutes");

    try {
      setLoading(true);
      const response = await axiosClient.post("/student/bookTrialSession", {
        requestedService: sessionType,
        tutorEmail: "test.tutor1.ieltswise67@gmail.com",
        studentEmail: email,
        studentName: name,
        startDate: startDate.toISOString(true),
        endDate: endDate.toISOString(true),
      });
      setShowLessonsModal(false);
      setShowBookModal(true);
      setBookResponse(response);
    } catch (e) {
      setShowLessonsModal(false);
      setBookResponse(e.response);
      setShowBookModal(true);
    }
  }
}
