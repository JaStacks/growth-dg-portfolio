import dynamic from "next/dynamic";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/ScrollStorySection";
import ContactSection from "@/components/ContactSection";
import { Geist, Geist_Mono } from "next/font/google";

const HeroSection = dynamic(() => import("@/components/HeroSection"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen bg-zinc-50 dark:bg-black`}>
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
