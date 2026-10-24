import styles from "./AnalyzeButton.module.scss";

export default function AnalyzeButton({
  loading,
  onClick,
}) {
  return (
    <button
      className={styles.button}
      disabled={loading}
      onClick={onClick}
    >
      {loading
        ? "Analyzing..."
        : "Analyze Match"}
    </button>
  );
}