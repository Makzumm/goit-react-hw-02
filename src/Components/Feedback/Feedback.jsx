import css from './Feedback.module.css';

function Feedback({ reviews, totalFeedback, positiveFeedbackFormula }) {
    return (
        <>
            <ul className={css.feedbackList}>
                {Object.entries(reviews).map(([key, value]) => (
                    <li className={css.feedbackListItem} key={key}>
                        {key}: {value}
                    </li>
                ))}
                <li className={css.feedbackListItem}>Total: {totalFeedback}</li>
                <li className={`${css.feedbackListItem} ${css.positiveFeedbackTxt}`}>Positive: {positiveFeedbackFormula}</li>
            </ul >
        </>
    );
}

export default Feedback;