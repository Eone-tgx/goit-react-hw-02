import css from "./Description.module.css";

function Description() {
  return (
    <div className={css.descriptionWrapper}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.titleText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}

export default Description;
