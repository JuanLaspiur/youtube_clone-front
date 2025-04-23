import React from "react";
import SubscriptionCard from "./SubscriptionCard";

interface VideoPlayerProps {
  title: string;
  youtubeId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, youtubeId }) => {
  return (
    <div style={styles.container}>
      <div style={styles.videoWrapper}>
        <iframe
          style={styles.iframe}
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>   
      <h2 style={styles.title}>{title}</h2>
      <SubscriptionCard 
        channelName="TrafikintuTV"
        subscribers="298 suscriptores"
        isSubscribed={true}
        shares={1}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "900px",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
    marginTop: "15px",
    color: "#fff",
  },
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    height: 0,
    overflow: "hidden",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
};

export default VideoPlayer;
