import { experience } from "@/data/profile";
import { Chip, Reveal, SectionHeading } from "@/components/ui";

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-border bg-surface/25">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="02"
          kicker="Professional experience"
          title="Where I've shipped Java"
          description="Five teams across approvals, batch processing, rentals, auctions, and enterprise operations — with layered Java services and production support."
        />

        <div className="relative">
          <div
            className="absolute top-2 bottom-2 left-1.5 hidden w-px bg-border md:block"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 60}>
                <article className="relative md:pl-10">
                  <span
                    className={`absolute top-6 left-0 hidden h-3 w-3 rounded-full border-2 md:block ${
                      job.current
                        ? "border-ember bg-ember"
                        : "border-border bg-background"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="card-lift rounded-xl border border-border bg-surface/70 p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                          {job.role}
                        </h3>
                        <p className="mt-1 font-mono text-sm text-ember">
                          {job.company}
                          <span className="text-muted-foreground"> · {job.location}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                        {job.current ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-ember/40 bg-ember/10 px-2.5 py-1 text-ember">
                            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                            current
                          </span>
                        ) : null}
                        {job.span}
                      </div>
                    </div>

                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {job.blurb}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {job.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember/70" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                      {job.stack.map((item) => (
                        <Chip key={item}>{item}</Chip>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
