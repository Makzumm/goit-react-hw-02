import css from './PositiveFeedback.module.css'

function PositiveFeedback({ positiveFeedbackFormula }) {
    return (
        <>
            <p className={css.positiveFeedbackTxt}>{positiveFeedbackFormula}%</p>
        </>
    )
}
export default PositiveFeedback; 