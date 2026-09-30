import Link from "next/link";

const navigation = [
  { label: "Index", href: "/index" },
  { label: "Work", href: "/#work" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-name" href="/" aria-label="Ray Sha home">
        Ray Sha
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="site-nav">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
