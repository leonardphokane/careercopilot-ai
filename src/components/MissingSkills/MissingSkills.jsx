export default function MissingSkills({
  items,
}) {
  return (
    <section>
      <h2>Missing Skills</h2>

      <ul>
        {items.map((item) => (
          <li key={item}>⚠️ {item}</li>
        ))}
      </ul>
    </section>
  );
}