export default function Recommendations({
  items,
}) {
  return (
    <section>
      <h2>Recommendations</h2>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}