import styles from "./MatchScoreCard.module.scss";

export default function MatchScoreCard({
  score,
}) {
  return (
    <article className={styles.card}>
      <h2>Match Score</h2>

      <div>{score}%</div>
    </article>
  );
}