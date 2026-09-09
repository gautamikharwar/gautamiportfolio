import Section from "@/components/Section";
import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="max-w-2xl space-y-8">
        <p className="text-foreground/70">{profile.bio}</p>
        <dl className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
          <div>
            <dt className="text-foreground/50">Location</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt className="text-foreground/50">Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`} className="hover:text-accent">
                {profile.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-foreground/50">Resume</dt>
            <dd>
              <a href={profile.resumeUrl} className="hover:text-accent">
                Download PDF
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
