"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ComponentScreenshot({ 
  src, 
  alt, 
  objectPosition = "center",
  aspect = "aspect-[4/3]"
}) {
  return (
    <div className={`relative ${aspect} rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black shadow-2xl group`}>
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

