import React from "react";
type SectionProps = { children?: React.ReactNode };
export default function Section({ children }: SectionProps) {
  return <div className="bg-white p-4 lg:p-6 rounded-xl w-full min-h-[500px]">{children}</div>;
}
