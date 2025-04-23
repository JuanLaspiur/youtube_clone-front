import React from 'react';

interface Comment {
  id: string;
  username: string;
  timeAgo: string;
  content: string;
  likes: number;
  replies: number;
  isEdited?: boolean;
}

interface CommentProps {
  comment: Comment;
}

const CommentComponent: React.FC<CommentProps> = ({ comment }) => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      padding: '16px 0',
    },
    header: {
      display: 'flex',
      marginBottom: '8px',
      fontSize: '14px',
      alignItems:'center',
      gap:'10px'
    },
    username: {
      fontWeight: 'bold',
      marginRight: '8px',
      color: '#333',
    },
    timeAgo: {
      color: '#666',
    },
    edited: {
      color: '#666',
      fontStyle: 'italic',
      marginLeft: '4px',
    },
    content: {
      marginBottom: '8px',
      lineHeight: '1.4',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      color: '#666',
      fontSize: '14px',
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '16px',
      cursor: 'pointer',
    },
    likes: {
      marginLeft: '4px',
    },
    replies: {
      marginLeft: '4px',
    },
    avatar:{
      width:'40px',
      borderRadius:'50%'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
         <img src="https://i.pravatar.cc/40" alt="Perfil"  style={styles.avatar}/> 
        <span style={styles.username}>@{comment.username}</span>
        <span style={styles.timeAgo}>
          {comment.timeAgo}
          {comment.isEdited && <span style={styles.edited}>(editado)</span>}
        </span>
      </div>
      <div style={styles.content}>{comment.content}</div>
      <div style={styles.footer}>
        <div style={styles.action}>
          <span>👍</span>
          <span style={styles.likes}>{comment.likes}</span>
        </div>
        <div style={styles.action}>
          <span>💬</span>
          <span style={styles.replies}>{comment.replies} respuestas</span>
        </div>
      </div>
    </div>
  );
};

const CommentSection: React.FC = () => {
  const comments: Comment[] = [
    {
      id: '1',
      username: 'krabappalk',
      timeAgo: 'hace 17 horas',
      content: 'Anécdota AC - DC: antes de la cucharita, después de la cucharita 😊',
      likes: 64,
      replies: 2,
    },
    {
      id: '2',
      username: 'lauchisba3651',
      timeAgo: 'hace 21 horas',
      content: 'Hola Antiaaaa! Una de las perlitas de Vivi es su gran gesto de bondad para acabar con la pobreza en el mundo: cuando se le pierde una media, pone la otra en la cartera para regalársela a los indigentes que encuentre en la calle. Tremendooooo',
      likes: 203,
      replies: 13,
    },
    {
      id: '3',
      username: 'Sofi61995',
      timeAgo: 'hace 1 día',
      content: 'Tenemos nuevo deporte nacional, odiar a Viviana Canosa jajajaja',
      likes: 122,
      replies: 3,
    },
    {
      id: '4',
      username: 'FelarofTheMeath',
      timeAgo: 'hace 15 horas',
      content: '1:21:27 BASSSTA, CORRRIALA, SOLLILLILLITÁ LA CUCHARITA, VIVIANA, SOLLLLITÁ 😊',
      likes: 49,
      replies: 0,
      isEdited: true,
    },
    {
      id: '5',
      username: 'prissmira',
      timeAgo: 'hace 18 horas',
      content: '9:04 vergüenza ajena da que crea que es re gracioso su "juego de palabras". Lo repite porque cree que es super ocurrente y gracioso. Pobre mina, da vergüenza',
      likes: 59,
      replies: 1,
    },
  ];

  const sectionStyles: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0',
    padding: '30px 0',
    borderRadius: '8px',
  };

  return (
    <div style={sectionStyles}>
      {comments.map((comment) => (
        <CommentComponent key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;