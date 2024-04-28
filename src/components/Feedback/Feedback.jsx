import css from './Feedback.module.css';

function Feedback({ reviews }) {
    return (
        <ul className={css.feedbackList}>
            {Object.entries(reviews).map(([key, value]) => (
                <li className={css.feedbackListItem} key={key}>
                    {key}: {value}
                </li>
            ))}
        </ul>
    );
}

export default Feedback;