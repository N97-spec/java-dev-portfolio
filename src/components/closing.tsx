import { education, profile } from "@/data/profile";
import { Reveal, SectionHeading } from "@/components/ui";

export function Education() {
  return (
    <section
      id="education"
      className="border-y border-border bg-surface/25"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading index="04" kicker="Education" title="Academic background" />

        <Reveal>
          <div className="card-lift flex flex-wrap items-center justify-between gap-6 rounded-xl border border-border bg-surface/70 p-7 md:p-9">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                {education.degree}
              </h3>
              <p className="mt-2 font-mono text-sm text-ember">
                {education.school}
                <span className="text-muted-foreground"> · {education.location}</span>
              </p>
            </div>
            <div className="rounded-lg border border-ember/30 bg-ember/10 px-5 py-4 font-mono text-xs text-ember">
              MS · CSE
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[760px] -translate-x-1/2 glow-ember"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="05"
          kicker="Get in touch"
          title="Let's talk Java"
          description="Open to Java full stack opportunities and conversations about backend services, APIs, and delivery pipelines."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <Reveal>
            <a
              href={`mailto:${profile.links.email}`}
              className="card-lift flex h-full flex-col justify-between rounded-xl border border-border bg-surface/60 p-6"
            >
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                Email
              </span>
              <span className="mt-3 font-mono text-sm break-all text-foreground">
                {profile.links.email}
              </span>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <div className="card-lift flex h-full flex-col justify-between rounded-xl border border-border bg-surface/60 p-6">
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                GitHub
              </span>
              <span className="mt-3 font-mono text-sm break-all text-foreground">
                {profile.links.github}
              </span>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card-lift flex h-full flex-col justify-between rounded-xl border border-border bg-surface/60 p-6">
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                LinkedIn
              </span>
              <span className="mt-3 font-mono text-sm break-all text-foreground">
                {profile.links.linkedin}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <p className="mt-6 font-mono text-xs text-muted-foreground">
            // The three details above are placeholders — send me your real email, GitHub, and
            LinkedIn and I'll swap them in.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-muted-foreground md:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </span>
        <a href="#top" className="transition-colors hover:text-ember">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
