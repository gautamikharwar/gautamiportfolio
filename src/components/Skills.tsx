import Section from "@/components/Section";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & technologies">
      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-medium text-foreground/50">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm dark:border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
