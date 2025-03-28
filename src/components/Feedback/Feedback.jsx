import css from "./Feedback.module.css";

function Feedback({ good, neutral, bad, totalFeedback, positivePercentage }) {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>Good: {good}</li>
      <li className={css.listItem}>Neutral: {neutral}</li>
      <li className={css.listItem}>Bad: {bad}</li>
      <li className={css.listItem}>Total: {totalFeedback}</li>
      <li className={css.listItem}>Positive: {positivePercentage}%</li>
    </ul>
  );
}

export default Feedback;
