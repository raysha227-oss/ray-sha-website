import { TagList } from "./tag-list";

type EntryHeaderProps = {
  number: string;
  kicker: string;
  title: string;
  summary: string;
  tags: readonly string[];
};

export function EntryHeader({
  number,
  kicker,
  title,
  summary,
  tags,
}: EntryHeaderProps) {
  return (
    <header className="entry-header">
      <div className="entry-number" aria-hidden="true">
        {number}
      </div>
      <div>
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
        <p className="entry-summary">{summary}</p>
        <TagList tags={tags} />
      </div>
    </header>
  );
}
