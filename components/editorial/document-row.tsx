type DocumentRowProps = { title: string; status: string; description: string };

export function DocumentRow({ title, status, description }: DocumentRowProps) {
  return (
    <div className="document-row">
      <div>
        <p className="document-title">{title}</p>
        <p>{description}</p>
      </div>
      <span>{status}</span>
    </div>
  );
}
