"use client";
import React from "react";

export default function ResponsiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-[20rem] h-[24rem] bg-white rounded-lg shadow-lg"
      onMouseOver={(e: React.SyntheticEvent) => {
        e.currentTarget.classList.remove("bg-white");
        e.currentTarget.classList.remove("shadow-lg");
        e.currentTarget.classList.add("bg-neutral-200");
        e.currentTarget.classList.add("shadow-2xl");
      }}
      onMouseOut={(e: React.SyntheticEvent) => {
        e.currentTarget.classList.remove("bg-neutral-200");
        e.currentTarget.classList.remove("shadow-2xl");
        e.currentTarget.classList.add("bg-white");
        e.currentTarget.classList.add("shadow-lg");
      }}
    >
      {children}
    </div>
  );
}
