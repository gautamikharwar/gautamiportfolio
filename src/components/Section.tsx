import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-black/10 py-20 dark:border-white/10">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10">
          {eyebrow && (
            <p className="mb-2 text-sm font-medium text-accent">{eyebrow}</p>
          )}
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
