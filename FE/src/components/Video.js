import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";
import testVideo from "../components/Videos/video1.mp4";
const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
  console.log("URL", url);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        src={testVideo}
        className="video__player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
