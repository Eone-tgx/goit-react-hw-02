import css from "./Options.module.css";

function Options({ options, onLeaveFeedback, onReset, totalFeedback }) {
  return (
    <div className={css.optionsWrapper}>
      {options.map((option) => (
        <button
          className={css.button}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
