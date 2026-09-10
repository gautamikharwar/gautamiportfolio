import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-4xl px-6 pb-16 pt-20 sm:pt-28">
      <p className="mb-4 flex items-center gap-2 text-sm font-medium text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        {profile.role}
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.tagline}
      </h1>
      <p className="mt-6 max-w-xl text-base text-foreground/70">
        {profile.bio}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
