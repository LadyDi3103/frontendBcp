import React, { useState } from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatMessage from '../components/ChatMessage'
import './ChatView.css'
import "../../../index.css";

interface ChatViewProps {
    cerrarChat?: () => void  // Usa ? si es opcional
  }

const ChatView: React.FC<ChatViewProps> = () => {
  const [messages, setMessages] = useState([
    { text: 'Hola soy Ardi-IA! 👋 Ardilla y asistente personal. ¿En qué puedo ayudarte?', fromUser: false },
    { text: '¿Qué es interes compuesto?', fromUser: true },
    { text: 'Con gusto te explico!', fromUser: false },
    { text: '................', fromUser: true }
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    
    if (input.trim()) {
      setMessages([...messages, { text: input, fromUser: true }])
      setInput('')
    }
  }

  return (
    <div className="chat-container">
        <ChatHeader/>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} fromUser={msg.fromUser} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe un mensaje"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>&gt;</button>
      </div>
    </div>
  )
}

export default ChatView