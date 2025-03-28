import './ChatHeader.css'
import "../../../index.css";


const ChatHeader: React.FC = () => {
    return (
      <div className="chat-header">
        <img src="/src/assets/juego/Ardilla_logo.png" alt="Avatar" className="avatar" />
        <div className="info">
          <p className="name">Ardi-IA</p>
          <p className="status"><span className="dot"></span> Siempre activo</p>
        </div>
      </div>
    )
  }
  
  export default ChatHeader