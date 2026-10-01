import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact, Education, Footer } from "@/components/closing";

const title = "Neha Yarrapothu — Java Full Stack Developer";
const description =
  "Portfolio of Neha Yarrapothu, a Java Full Stack Developer in Denton, TX working on approval workflows, batch processing, rental applications, and online auctions with Java, Spring Boot, REST APIs, and SQL.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
