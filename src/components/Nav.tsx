import Link from "next/link";
import { navLinks, profile } from "@/data/portfolio";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur-sm dark:border-white/10">
      <nav className="mx-auto flex max-w-4xl items-center gap-6 px-6 py-4">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight"
        >
          {profile.name}
        </Link>
        <ul className="flex min-w-0 items-center gap-4 overflow-x-auto text-sm whitespace-nowrap text-foreground/70 sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
