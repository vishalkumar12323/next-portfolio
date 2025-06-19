import React from "react";

export default function ProjectsLayout({
  model,
  children,
}: {
  model: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {model}
      {children}
    </>
  );
}
