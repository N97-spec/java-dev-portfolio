import { profile, ticker } from "@/data/profile";
import { Reveal } from "@/components/ui";

type Tok = { t: string; c?: "key" | "type" | "str" | "num" | "com" | "fn" | "plain" };

const code: Tok[][] = [
  [{ t: "/**", c: "com" }],
  [{ t: " * Java Full Stack Developer — enterprise web applications", c: "com" }],
  [{ t: " * Java 11/17 · Spring Boot · REST APIs · SQL", c: "com" }],
  [{ t: " */", c: "com" }],
  [
    { t: "public ", c: "key" },
    { t: "class ", c: "key" },
    { t: "NehaYarrapothu", c: "type" },
    { t: " {" },
  ],
  [{ t: "" }],
  [
    { t: "    ", c: "plain" },
    { t: "private final ", c: "key" },
    { t: "String ", c: "type" },
    { t: "role" },
    { t: " = ", c: "plain" },
    { t: '"Java Full Stack Developer"', c: "str" },
    { t: ";" },
  ],
  [
    { t: "    ", c: "plain" },
    { t: "private final ", c: "key" },
    { t: "String ", c: "type" },
    { t: "base" },
    { t: " = ", c: "plain" },
    { t: '"Denton, TX"', c: "str" },
    { t: ";" },
  ],
  [{ t: "" }],
  [
    { t: "    ", c: "plain" },
    { t: "List", c: "type" },
    { t: "<" },
    { t: "String", c: "type" },
    { t: "> " },
    { t: "stack", c: "fn" },
    { t: "() {" },
  ],
  [
    { t: "        ", c: "plain" },
    { t: "return ", c: "key" },
    { t: "List", c: "type" },
    { t: "." },
    { t: "of", c: "fn" },
    { t: "(" },
    { t: '"Java 17"', c: "str" },
    { t: ", ", c: "plain" },
    { t: '"Spring Boot"', c: "str" },
    { t: "," },
  ],
  [
    { t: "                ", c: "plain" },
    { t: '"REST APIs"', c: "str" },
    { t: ", ", c: "plain" },
    { t: '"PostgreSQL"', c: "str" },
    { t: ", ", c: "plain" },
    { t: '"Kafka"', c: "str" },
    { t: ");" },
  ],
  [{ t: "    }" }],
  [{ t: "" }],
  [
    { t: "    ", c: "plain" },
    { t: "public static ", c: "key" },
    { t: "void ", c: "type" },
    { t: "main", c: "fn" },
    { t: "(" },
    { t: "String", c: "type" },
    { t: "[] args) {" },
  ],
  [
    { t: "        ", c: "plain" },
    { t: "var ", c: "key" },
    { t: "dev = " },
    { t: "new ", c: "key" },
    { t: "NehaYarrapothu", c: "type" },
    { t: "();" },
  ],
  [
    { t: "        ", c: "plain" },
    { t: "System" },
    { t: "." },
    { t: "out", c: "plain" },
    { t: "." },
    { t: "println", c: "fn" },
    { t: "(dev.role + ", c: "plain" },
    { t: '" · "', c: "str" },
    { t: " + dev.base);" },
  ],
  [{ t: "    }" }],
  [{ t: "}" }],
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[860px] -translate-x-1/2 glow-ember"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-20 md:px-8 md:pt-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10">
        <div className="min-w-0">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.16em] uppercase">
              <span className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-3 py-1.5 text-ember">
                <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                {profile.base}
              </span>
              <span className="text-muted-foreground">{profile.headline.join(" / ")}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Neha
              <br />
              <span className="text-ember">Yarrapothu</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View experience
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-ember/50"
              >
                Selected work
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-10 grid gap-5 border-t border-border pt-7 sm:grid-cols-3">
              {profile.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-snug text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={180} className="min-w-0">
          <div className="overflow-hidden rounded-xl border border-border bg-surface/90 shadow-2xl shadow-black/50 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border bg-surface-2/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-ember/70" />
              <span className="h-3 w-3 rounded-full bg-sage/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                NehaYarrapothu.java
              </span>
            </div>

            <pre className="overflow-x-auto px-4 py-5 font-mono text-[12.5px] leading-[1.65] md:text-[13px]">
              <code>
                {code.map((line, i) => (
                  <div key={i} className="flex min-h-[1.65em]">
                    <span className="mr-4 w-5 shrink-0 text-right text-muted-foreground/35 select-none">
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">
                      {line.map((tok, j) => (
                        <span key={j} className={tok.c ? `tok-${tok.c}` : "text-foreground"}>
                          {tok.t}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </code>
            </pre>

            <div className="flex items-center gap-2 border-t border-border bg-surface-2/60 px-4 py-3 font-mono text-xs">
              <span className="text-sage">$</span>
              <span className="text-muted-foreground">java NehaYarrapothu</span>
              <span className="ml-auto text-foreground/80">
                Java Full Stack Developer · Denton, TX
              </span>
              <span className="caret text-ember">▍</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="marquee relative border-y border-border bg-surface/40 py-4">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap will-change-transform">
          {[...ticker, ...ticker].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-mono text-sm text-muted-foreground"
            >
              {item}
              <span className="text-ember/60" aria-hidden="true">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
