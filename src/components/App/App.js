import { useState } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import Section from "../Section/Section";

export default function App() {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const label = e.target.name;
    if (label === "Good") {
      setGood(Good + 1);
    }
    if (label === "Neutral") {
      setNeutral(Neutral + 1);
    }
    if (label === "Bad") {
      setBad(Bad + 1);
    }
  };

  const countTotal = (e) => {
    const totalCount = Good + Neutral + Bad;
    return totalCount;
  };

  const countPositivePercentage = (e) => {
    const total = countTotal();
    const percent = (Good * 100) / total;
    return Math.round(percent);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["Good", "Neutral", "Bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {Good || Neutral || Bad ? (
          <Statistics
            good={Good}
            neutral={Neutral}
            bad={Bad}
            total={countTotal()}
            positivePercentage={countPositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
