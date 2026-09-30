import { skillGroups } from "@/data/profile";
import { Chip, Reveal, SectionHeading } from "@/components/ui";

export function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        index="01"
        kicker="Technical stack"
        title="What I build with"
        description="Tools and technologies used across enterprise Java applications — from controller and service layers down to persistence, messaging, and delivery."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.group} delay={(i % 3) * 70}>
            <div className="card-lift h-full rounded-xl border border-border bg-surface/60 p-5">
              <h3 className="font-mono text-xs tracking-[0.16em] text-ember uppercase">
                {group.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
