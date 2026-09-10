import Link from "next/link";
import { navLinks, profile } from "@/data/portfolio";
import DownloadIcon from "@/components/icons/DownloadIcon";

export default function Nav() {
  return (
    <header className="hero-gradient sticky top-0 z-50 border-b border-white/10">
      <nav className="mx-auto flex max-w-4xl items-center gap-6 px-6 py-4">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-white"
        >
          {profile.name}
        </Link>
        <ul className="flex min-w-0 items-center gap-4 overflow-x-auto text-sm whitespace-nowrap text-white/70 sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeUrl}
          download
          className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium whitespace-nowrap text-white transition-colors hover:bg-white/10"
        >
          Download Resume
          <DownloadIcon className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}
