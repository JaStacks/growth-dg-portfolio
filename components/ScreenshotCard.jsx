"use client";
import Image from "next/image";
import { cn } from "./_utils/cn";

export default function ScreenshotCard({
  src,
  alt,
  caption,
  aspect = "4/3",
  objectPosition = "center",
}) {
  return (
    <figure className="group select-none">
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 shadow-md transition-transform duration-300 group-hover:shadow-lg",
          `aspect-[${aspect}]`
        )}
      >
        <Image
          src={src}
          alt={alt || caption || "screenshot"}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
          style={{ objectPosition }}
          priority={false}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 truncate text-xs text-zinc-600 dark:text-zinc-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}


