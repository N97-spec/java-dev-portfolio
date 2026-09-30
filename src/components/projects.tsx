import { projects } from "@/data/profile";
import { Chip, Reveal, SectionHeading } from "@/components/ui";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        index="03"
        kicker="Selected work"
        title="Systems I've worked on"
        description="Backend services, batch pipelines, and the interfaces attached to them — across operations, banking, case management, and e-commerce."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 80}>
            <article className="card-lift flex h-full flex-col rounded-xl border border-border bg-surface/60 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  {project.name}
                </h3>
                <span className="mt-1 font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-ember">{project.org}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-foreground/85"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember/70" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                {project.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
