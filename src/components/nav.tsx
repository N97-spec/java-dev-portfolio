import { profile } from "@/data/profile";
import { useScrollProgress } from "@/components/ui";

const links = [
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export function Nav() {
  const progress = useScrollProgress();

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a
            href="#top"
            className="group flex items-center gap-3 font-mono text-sm text-foreground"
          >
            <span className="grid h-8 w-8 place-items-center rounded-md border border-ember/40 bg-ember/10 text-xs text-ember">
              NY
            </span>
            <span className="hidden sm:inline">{profile.name.toLowerCase()}</span>
            <span className="caret text-ember">_</span>
          </a>

          <div className="flex items-center gap-1 md:gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hidden rounded-md px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground md:inline-block"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-primary px-4 py-2 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
      <div className="h-px w-full bg-transparent">
        <div
          className="h-px bg-ember/80 transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}
