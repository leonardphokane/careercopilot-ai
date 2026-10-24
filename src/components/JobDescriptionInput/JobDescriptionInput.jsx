import styles from "./JobDescriptionInput.module.scss";

export default function JobDescriptionInput({
  value,
  onChange,
  error,
}) {
  return (
    <section className={styles.wrapper}>
      <label htmlFor="jobDescription">
        Job Description
      </label>

      <textarea
        id="jobDescription"
        name="jobDescription"
        value={value}
        onChange={onChange}
        rows={10}
        placeholder="Paste the job description here..."
        aria-invalid={!!error}
        aria-describedby={
          error ? "job-description-error" : undefined
        }
      />

      {error && (
        <p
          id="job-description-error"
          className={styles.error}
          role="alert"
        >
          {error}
        </p>
      )}
    </section>
  );
}