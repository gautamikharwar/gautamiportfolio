import Section from "@/components/Section";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="space-y-10">
        {experience.map((item) => (
          <li key={`${item.role}-${item.company}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-medium">
                {item.role} ·{" "}
                <span className="text-foreground/70">{item.company}</span>
              </h3>
              <span className="text-sm text-foreground/50">{item.period}</span>
            </div>
            <p className="mt-2 text-sm text-foreground/70">
              {item.description}
            </p>
            {item.highlights.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/70">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
