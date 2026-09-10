import Section from "@/components/Section";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <p className="max-w-xl text-foreground/70">
        I&apos;m always open to discussing new projects, collaborations, or
        design opportunities. The best way to reach me is by email or phone.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {profile.email}
        </a>
        <a
          href={`tel:${profile.phone.replace(/[\s-]/g, "")}`}
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          {profile.phone}
        </a>
        {profile.social.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-foreground/50">{profile.location}</p>
    </Section>
  );
}
