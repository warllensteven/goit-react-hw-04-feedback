import React, { useState } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  const options = ['good', 'neutral', 'bad'];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>

      {total > 0 ? (
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;
