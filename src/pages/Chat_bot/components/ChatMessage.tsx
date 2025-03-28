import './ChatMessage.css'
import "../../../index.css";

interface Props {
  message: string
  fromUser?: boolean
}

const ChatMessage: React.FC<Props> = ({ message, fromUser = false }) => {
  return (
    <div className={`chat-message ${fromUser ? 'user' : 'bot'}`}>
       {!fromUser && (
        <img
          src="/src/assets/juego/Ardilla_logo.png"
          alt="Avatar"
          className="avatar"
        />
      )}
      <div className="bubble">{message}</div>
    </div>
  )
}

export default ChatMessage
