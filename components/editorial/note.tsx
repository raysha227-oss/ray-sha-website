export function Note({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: string;
}) {
  return (
    <article className="note-card">
      <p className="kicker">{label}</p>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
