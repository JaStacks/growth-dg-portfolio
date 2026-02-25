"use client";

export default function Section({
  children,
  dark = false,
  className = "",
  ...props
}) {
  return (
    <section
      className={`relative w-full overflow-hidden ${dark ? "bg-dark text-[var(--background)]" : "bg-[var(--background)] text-dark"} py-16 sm:py-20 md:py-24 lg:py-32 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
