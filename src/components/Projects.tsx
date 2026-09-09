import Section from "@/components/Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col rounded-2xl border border-black/10 p-6 transition-colors hover:border-black/25 dark:border-white/10 dark:hover:border-white/25"
          >
            <h3 className="font-medium">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm text-foreground/70">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/5 px-2.5 py-1 text-xs text-foreground/70 dark:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 text-sm font-medium">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="text-accent hover:underline"
                >
                  Live site →
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="text-accent hover:underline"
                >
                  Code →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
