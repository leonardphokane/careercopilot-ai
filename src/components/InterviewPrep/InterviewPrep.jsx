export default function InterviewPrep({
  items,
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <h2>Interview Preparation</h2>

      <ul>
        {items.map((question) => (
          <li key={question}>
            {question}
          </li>
        ))}
      </ul>
    </section>
  );
}