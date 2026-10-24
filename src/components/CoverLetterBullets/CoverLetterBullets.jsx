export default function CoverLetterBullets({
  items,
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <h2>Cover Letter Bullets</h2>

      <ul>
        {items.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
}