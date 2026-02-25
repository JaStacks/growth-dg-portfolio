import ProjectsSection from "@/components/ProjectsSection";
import Section from "@/components/ui/Section";

export default function ProjectsIndex() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Section>
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="font-heading text-3xl font-bold text-dark">Projects</h1>
          <p className="mt-2 text-[var(--dark)]/70">Case studies and live work.</p>
          <div className="mt-8">
            <ProjectsSection />
          </div>
        </div>
      </Section>
    </main>
  );
}


