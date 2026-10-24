import styles from "./ResumeUploader.module.scss";

export default function ResumeUploader({
  value,
  onChange,
  error,
}) {
  return (
    <section className={styles.wrapper}>
      <label htmlFor="resume">
        Resume Content
      </label>

      <textarea
        id="resume"
        rows={10}
        value={value}
        onChange={onChange}
        placeholder="Paste your resume here..."
      />

      {error && (
        <p className={styles.error}>
          {error}
        </p>
      )}
    </section>
  );
}