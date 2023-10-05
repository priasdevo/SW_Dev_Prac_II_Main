"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const router = useRouter();
  return (
    <div
      className="block p-5 m-0 w-screen h-[40rem] relative"
      onClick={() => {
        if (currentBanner === 3) {
          setCurrentBanner(0);
        } else {
          setCurrentBanner((prevBanner) => prevBanner + 1);
        }
      }}
    >
      <Image
        src={`/banner${currentBanner + 1}.jpg`}
        alt="cover"
        fill={true}
        objectFit="cover"
        style={{ opacity: 0.6 }}
      />
      <div className="relative top-20 z-20 text-black text-center text-lg font-semibold">
        <h1>Your vaccine provider</h1>
        <h3>Protect your body with us</h3>
      </div>
      <div className="absolute bottom-[50px] right-[50px] w-[200px] h-[50px]">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.push("/hospital");
          }}
        >
          Go To Hospitals List
        </button>
      </div>
    </div>
  );
}
