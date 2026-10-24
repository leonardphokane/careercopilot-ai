import styles from "./ErrorState.module.scss";

export default function ErrorState({
  message,
}) {
  return (
    <div
      className={styles.error}
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
}