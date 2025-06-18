import React from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-6 mt-6 grid grid-cols-1 place-items-center md:place-items-baseline gap-4 md:gap-2 md:grid-cols-3">
      {children}
    </div>
  );
}
