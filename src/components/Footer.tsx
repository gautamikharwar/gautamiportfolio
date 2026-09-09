import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-10 text-sm text-foreground/60 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-5">
          {profile.social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
