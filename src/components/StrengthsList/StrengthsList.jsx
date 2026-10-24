export default function StrengthsList({
  items,
}) {
  return (
    <section>
      <h2>Strengths</h2>

      <ul>
        {items.map((item) => (
          <li key={item}>✅ {item}</li>
        ))}
      </ul>
    </section>
  );
}