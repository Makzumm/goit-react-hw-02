import css from './Options.module.css';

function Options({ updateFeedback, totalFeedback, clearFeedback }) {
    return (
        <>
            <button className={css.reviewBtn} onClick={() => updateFeedback('good')}>Good</button >
            <button className={css.reviewBtn} onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className={css.reviewBtn} onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 ? <button className={css.reviewBtn} onClick={() => clearFeedback()}>Reset</button> : null}
        </>
    );
}

export default Options;