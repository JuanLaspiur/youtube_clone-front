import './VideoGrid.css';

const VideoGrid: React.FC = () => {
  return (
    <div className="video-grid">
      {Array.from({ length: 12 }).map((_, index) => (
        <div className="video-card" key={index}>
          <div className="thumbnail" />
          <div className="video-info">
            <div className="title">Título del video {index + 1}</div>
            <div className="channel">Nombre del canal</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
