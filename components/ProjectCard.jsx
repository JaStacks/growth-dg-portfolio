"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Zap, Layers } from "lucide-react";
import Card from "@/components/ui/Card";

export default function ProjectCard({ title, description, tags = [], href = "#", imageSrc }) {
  const isInternal = href.startsWith("/");

  const Inner = (
    <>
      {!imageSrc && (
        <div
          className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[2rem] border border-[var(--dark)]/10 bg-[var(--primary)]/30"
          style={{ borderColor: "rgba(17,17,17,0.1)" }}
        >
          <div className="relative flex items-center gap-4">
            <div className="rounded-[2rem] border border-[var(--dark)]/10 bg-[var(--background)] p-4 shadow-sm transition-transform group-hover:scale-110">
              <Code2 className="h-8 w-8 text-accent" style={{ color: "var(--accent)" }} />
            </div>
            <div className="rounded-[2rem] border border-[var(--dark)]/10 bg-[var(--background)] p-4 shadow-sm transition-transform delay-75 group-hover:scale-110">
              <Zap className="h-8 w-8 text-accent" style={{ color: "var(--accent)" }} />
            </div>
            <div className="rounded-[2rem] border border-[var(--dark)]/10 bg-[var(--background)] p-4 shadow-sm transition-transform delay-150 group-hover:scale-110">
              <Layers className="h-8 w-8 text-accent" style={{ color: "var(--accent)" }} />
            </div>
          </div>
        </div>
      )}
      <div className={`space-y-3 ${imageSrc ? "mt-6" : "mt-4"}`}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-2xl font-bold text-dark transition-colors group-hover:text-accent">
            {title}
          </h3>
          <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--dark)]/50 transition-all group-hover:translate-x-1 group-hover:text-accent" style={{ color: "var(--dark)" }} />
        </div>
        <p className="text-base leading-relaxed text-[var(--dark)]/70">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--dark)]/15 bg-[var(--primary)]/50 px-3 py-1.5 text-xs font-medium text-dark"
              style={{ borderColor: "rgba(17,17,17,0.12)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <Card className="group p-6 transition-all duration-300 hover:shadow-xl" animate>
      {isInternal ? (
        <Link
          href={href}
          className="block focus:outline-none focus:ring-2 focus:ring-accent rounded-[2rem]"
          style={{ outlineColor: "var(--accent)" }}
        >
          {Inner}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {Inner}
        </a>
      )}
    </Card>
  );
}
