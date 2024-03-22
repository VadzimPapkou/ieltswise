import Tab from "./Tab";
import classes from "./IeltsPreparation.module.css";
import { BookFreeChatButton } from "./BookFreeChatButton";

const FunctionalEnglish = () => {
  return (
    <Tab title="What are Functional English skills?">
      <p className="p1">
        What comes in your mind when you hear English? Shakespeare! Keats! But is there a difference when we talk about
        English as an academic discipline and English as a day-to-day language that we speak? English is increasingly
        becoming a universal language and it has seen a growth in the number of speakers than any other language in the
        world.
      </p>
      <br />
      <p className="p1">
        Functional English provides the basis for effective communication and understanding across the three subject
        skill areas; speaking and listening, reading, writing, speaking and listening. The study of Functional English
        will broaden your skills and confidence, allowing you to develop skills that help you to get on in life and
        work.
      </p>
      <br />
      <p className="p1">
        The aim of these sessions is to improve your English skills, assisting you in your life and work. You will study
        at your own pace with lots of support using differnet styles that suit your learning needs.
      </p>
      <BookFreeChatButton className={classes.bookFreeChatButton} defaultSessionType="Functional English" />
    </Tab>
  );
};

export default FunctionalEnglish;
