"use client";

import Banner from "@/components/Banner";
import PromoteCard from "@/components/PromoteCard";
import useWindowListener from "@/hooks/useWindowListener";
import React, { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  useWindowListener({
    eventType: "contextmenu",
    action: (e) => {
      e.preventDefault();
    },
  });

  return (
    <main className="flex flex-col justify-between items-center p-24 pt-0 min-h-screen">
      <Banner />
      <PromoteCard isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </main>
  );
}
