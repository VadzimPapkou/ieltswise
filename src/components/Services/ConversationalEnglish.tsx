import classes from "./ConversationalEnglish.module.css";
import Tab from "./Tab";
import clsx from "clsx";

const ConversationalEnglish = () => {
  return (
    <Tab title="You can keep up any conversation!">
      <p className={clsx("p1", classes.description)}>
        We will use English conversation sessions which will teach you the
        phrases, grammar, and vocabulary that you can use to start sounding like
        a native speaker. English is the universal language of business, travel,
        and education which offers huge benefits to its international speakers.
      </p>
    </Tab>
  );
};

export default ConversationalEnglish;
