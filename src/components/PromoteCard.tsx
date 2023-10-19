// PromoteCard.tsx
"use client";
import React from "react";
import VideoPlayer from "./VideoPlayer";

interface propsType {
  isPlaying: boolean;
  setIsPlaying: Function;
}

const PromoteCard = (props: propsType) => {
  const { isPlaying, setIsPlaying } = props;

  const toggleVideoPlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative border rounded-md shadow-lg overflow-hidden w-128 flex flex-row">

      <VideoPlayer
        videoSrc={"/getvaccine.mp4"}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

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
