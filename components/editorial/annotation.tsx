import type { ReactNode } from "react";

export function Annotation({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <aside className="annotation" aria-label={label}>
      <span>{label}</span>
      <p>{children}</p>
    </aside>
  );
}
