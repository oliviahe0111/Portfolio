import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id}>
      <h2 className="text-2xl font-bold text-black dark:text-white border-b border-primary/20 dark:border-primary/30 pb-4 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
