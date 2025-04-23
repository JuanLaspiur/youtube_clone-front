import React from 'react';

interface SubscriptionCardProps {
  channelName?: string;
  subscribers?: string;
  isSubscribed?: boolean;
  shares?: number;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  channelName = 'TrafikintuTV',
  subscribers = '298 suscriptores',
  isSubscribed = false,
  shares = 1,
}) => {
  // Definición de estilos como objeto CSSProperties
  const styles: { [key: string]: React.CSSProperties } = {
    card: {
      backgroundColor: 'rgba(50, 50, 50, 0.9)',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '16px',
      fontFamily: '"Roboto", sans-serif',
    },
    header: {
      marginBottom: '12px',
    },
    channelName: {
      fontSize: '1.125rem',
      fontWeight: 600,
      margin: '0 0 4px 0',
      color: '#fff',
    },
    subscribers: {
      fontSize: '0.875rem',
      margin: 0,
      color: '#606060',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    subscribeButton: {
      backgroundColor: isSubscribed ? '#e5e5e5' : '#f1f1f1',
      border: 'none',
      borderRadius: '18px',
      padding: '8px 16px',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    shareContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      color: '#606060',
      fontSize: '0.875rem',
    },
    shareCount: {
      fontWeight: 500,
    },
    downloadButton: {
      background: 'none',
      border: 'none',
      color: '#065fd4',
      fontSize: '0.875rem',
      fontWeight: 500,
      cursor: 'pointer',
      padding: '8px',
    },
  };

  // Estilo dinámico para hover
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = isSubscribed ? '#d9d9d9' : '#e5e5e5';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = isSubscribed ? '#e5e5e5' : '#f1f1f1';
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
      <img src="https://i.pravatar.cc/40" alt="Perfil" />
        <h3 style={styles.channelName}>{channelName}</h3>
        <p style={styles.subscribers}>{subscribers}</p>
      </div>

      <div style={styles.actions}>
       

        <div style={styles.shareContainer}> 
            <button
          style={styles.subscribeButton}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isSubscribed ? 'Suscrito' : 'Suscribirse'}
        </button>
          <span style={styles.shareCount}>{shares}</span>
          <span>Compartir</span> 
           <button 
          style={styles.downloadButton}
          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          Descargar
        </button>
        </div>

      
      </div>
    </div>
  );
};

export default SubscriptionCard;