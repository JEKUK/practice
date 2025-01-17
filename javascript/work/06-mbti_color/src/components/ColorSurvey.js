import styles from "./ColorSurvey.module.css"


function ColorSurvey({ value,onClick }) {
    return (
        <div className={styles.colorSurvey} onClick={onClick}>
            <div className={styles.id}>{value.id}</div>
            <div className={styles.mbti}>{value.mbti}</div>
            <div className={styles.arrow}>
                <img className={styles.arrowIcon} src="images/arrow.svg" alt="arrow Icon" />
            </div>
            <div className={styles.colorChip} style={{ backgroundColor: value.colorCode }}></div>
            <div className={styles.colorCode}>{value.colorCode}</div>
        </div>
    )
}

export default ColorSurvey