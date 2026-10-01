const navigation = [
  { label: "Index", href: "/index" },
  { label: "Work", href: "/work" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
] as const;

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="site-header">
      <a className="site-name" href="/" aria-label="Ray Sha home">
        Ray Sha
      </a>
      <nav aria-label="Primary navigation">
        <ul className="site-nav">
          {navigation.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                aria-current={active === item.label ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
