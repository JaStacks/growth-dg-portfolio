import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsIndex() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">Projects</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">Case studies and live work.</p>
      <div className="mt-6">
        <ProjectsSection />
      </div>
    </main>
  );
}


