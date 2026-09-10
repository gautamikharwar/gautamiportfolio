import { aboutHeadline, aboutStats } from "@/data/portfolio";
import ArrowUpRightIcon from "@/components/icons/ArrowUpRightIcon";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-black/10 py-20 dark:border-white/10"
    >
      <div className="mx-auto max-w-4xl px-6">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-accent uppercase">
          About Myself
        </span>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {aboutHeadline}
          </h2>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-foreground py-1.5 pr-1.5 pl-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get in touch
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-black/5 p-6 dark:bg-white/5"
            >
              <div className="text-4xl font-semibold tracking-tight">
                {stat.value}
              </div>
              <div className="mt-6 text-sm text-foreground/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
