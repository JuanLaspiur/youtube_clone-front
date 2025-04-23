import React from "react";

const videos = [
  {
    id: "1",
    thumbnail: "https://img.freepik.com/foto-gratis/textura-pared-cemento-viejo_1149-1280.jpg?t=st=1745436861~exp=1745440461~hmac=2f169d11a7be49b0647f2209fe88236131f3551e7dc670317d173a05e4bf3afc&w=1380",
    title: "🧠 Cultura en agenda: ¿resistimos o sobrevivimos?",
    channel: "TrafkintuTV",
    views: "4 vistas",
    timeAgo: "hace 5 horas",
    duration: "23:30",
  },
  {
    id: "2",
    thumbnail: "https://img.freepik.com/foto-gratis/textura-pared-cemento-viejo_1149-1280.jpg?t=st=1745436861~exp=1745440461~hmac=2f169d11a7be49b0647f2209fe88236131f3551e7dc670317d173a05e4bf3afc&w=1380",
    title: "LOS AUDIOS QUE EL PAPA FRANCISCO LE PIDIÓ...",
    channel: "Telenoche",
    views: "124 k vistas",
    timeAgo: "hace 19 horas",
    duration: "8:16",
  },
  {
    id: "3",
    thumbnail: "https://img.freepik.com/foto-gratis/textura-pared-cemento-viejo_1149-1280.jpg?t=st=1745436861~exp=1745440461~hmac=2f169d11a7be49b0647f2209fe88236131f3551e7dc670317d173a05e4bf3afc&w=1380",
    title: "La causa del fallecimiento del Papa Francisco",
    channel: "RPP Noticias",
    views: "117 k vistas",
    timeAgo: "hace 1 día",
    duration: "9:03",
  },
  {
    id: "4",
    thumbnail: "https://img.freepik.com/foto-gratis/textura-pared-cemento-viejo_1149-1280.jpg?t=st=1745436861~exp=1745440461~hmac=2f169d11a7be49b0647f2209fe88236131f3551e7dc670317d173a05e4bf3afc&w=1380",
    title: "Microsoft... Esto es ilegal",
    channel: "midulive",
    views: "19 k vistas",
    timeAgo: "hace 5 horas",
    duration: "11:49",
  },
  {
    id: "5",
    thumbnail: "https://img.freepik.com/foto-gratis/textura-pared-cemento-viejo_1149-1280.jpg?t=st=1745436861~exp=1745440461~hmac=2f169d11a7be49b0647f2209fe88236131f3551e7dc670317d173a05e4bf3afc&w=1380",
    title: "Cuantas Veces Siendo Niño Te Rece",
    channel: "Release - Topic",
    views: "41 M de vistas",
    timeAgo: "hace 6 años",
    duration: "6:11",
  },
  {
    id: "6",
    thumbnail: "https://img.freepik.com/foto-gratis/textura-pared-cemento-viejo_1149-1280.jpg?t=st=1745436861~exp=1745440461~hmac=2f169d11a7be49b0647f2209fe88236131f3551e7dc670317d173a05e4bf3afc&w=1380",
    title: "🧠 La psicóloga Joaquina Piccirillo...",
    channel: "TrafkintuTV",
    views: "71 vistas",
    timeAgo: "hace 7 días",
    duration: "28:38",
  },
];

const VideoGallery: React.FC = () => {
  return (
    <div style={styles.gallery}>
      {videos.map((video) => (
        <div key={video.id} style={styles.videoCard}>
          <div style={styles.thumbnailContainer}>
            <img src={video.thumbnail} alt={video.title} style={styles.thumbnail} />
            <span style={styles.duration}>{video.duration}</span>
          </div>
          <div style={styles.videoInfo}>
            <h4 style={styles.title}>{video.title}</h4>
            <p style={styles.channel}>{video.channel}</p>
            <p style={styles.meta}>
              {video.views} • {video.timeAgo}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
    gallery: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      padding: "16px",
      flexDirection: "column",
      height:'max-content',
    },
    videoCard: {
      display: "flex",
      flexDirection: "row", // Apila en línea
      width: "100%", // Puedes ajustar esto a 400px o el que prefieras
      maxWidth: "500px",
      backgroundColor: "#181818",
      color: "#fff",
      borderRadius: "8px",
      overflow: "hidden",
      fontFamily: "sans-serif",
    },
    thumbnailContainer: {
      position: "relative",
      width: "150px",
      flexShrink: 0,
    },
    thumbnail: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
    },
    duration: {
      position: "absolute",
      bottom: "8px",
      right: "8px",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      color: "#fff",
      padding: "2px 6px",
      borderRadius: "4px",
      fontSize: "12px",
    },
    videoInfo: {
      padding: "10px",
      flex: 1,
    },
    title: {
      fontSize: "14px",
      fontWeight: 600,
      margin: "4px 0",
    },
    channel: {
      fontSize: "12px",
      color: "#aaa",
    },
    meta: {
      fontSize: "12px",
      color: "#888",
    },
  };
  

export default VideoGallery;
