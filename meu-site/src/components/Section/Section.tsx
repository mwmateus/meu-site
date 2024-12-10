import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="content-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}