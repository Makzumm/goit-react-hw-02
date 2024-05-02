import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem("saved-reviews");

    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }
  )

  const clearFeedback = () => {
    const defaultReviewsObj = {
      good: 0,
      neutral: 0,
      bad: 0
    }
    setReviews(defaultReviewsObj)
  }

  const updateFeedback = feedbackType => {
    setReviews(reviews => ({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    }))
  }

  useEffect(() => {
    window.localStorage.setItem("saved-reviews", JSON.stringify(reviews))
  }, [reviews])

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedbackFormula = Math.round((reviews.good / totalFeedback) * 100)

  return (
    <>
      <Description title='Sip Happens Café' infoText='Please leave your feedback about our service by selecting one of the options below.' />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} clearFeedback={clearFeedback} />
      {totalFeedback > 0 ? (
        <>
          <Feedback reviews={reviews} totalFeedback={totalFeedback} positiveFeedbackFormula={positiveFeedbackFormula} />
        </>
      ) : (
        <Notification />
      )}
    </>
  )
}

export default App
