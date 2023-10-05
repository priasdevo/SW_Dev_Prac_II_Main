import { useRef, useEffect } from "react";

interface propsType {
  videoSrc: string;
  isPlaying: boolean;
  setIsPlaying: Function;
}

const VideoPlayer = (props: propsType) => {
  const { videoSrc, isPlaying } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);
  return (
    <video ref={videoRef} className="w-[50%]" muted>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
