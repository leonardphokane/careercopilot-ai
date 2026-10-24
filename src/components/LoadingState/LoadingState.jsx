import styles from "./LoadingState.module.scss";

export default function LoadingState() {
  return (
    <div
      className={styles.loading}
      aria-live="polite"
    >
      <div className={styles.spinner}></div>

      <p>
        Analyzing resume against job
        description...
      </p>
    </div>
  );
}