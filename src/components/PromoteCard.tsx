// PromoteCard.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";

interface propsType {
  isPlaying: boolean;
  setIsPlaying: Function;
}

const PromoteCard = (props: propsType) => {
  const { isPlaying, setIsPlaying } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    while (!videoRef.current) {}
    videoRef.current.play();
  }, []);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative border rounded-md shadow-lg overflow-hidden w-128 flex flex-row">
      <video
        ref={videoRef}
        className="w-[50%]"
        onClick={toggleVideoPlayback}
        muted
      >
        <source src="/getvaccine.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={toggleVideoPlayback}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      <div className="p-4">
        <p className="text-center font-bold">Get your vaccinate today</p>
      </div>
    </div>
  );
};

export default PromoteCard;
