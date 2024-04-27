import css from './Description.module.css';

function Description({ title, infoText }) {
    return (
        <>
            <h1 className={css.title}>{title}</h1>
            <p className={css.infoTxt}>{infoText}</p>
        </>
    )
}

export default Description;