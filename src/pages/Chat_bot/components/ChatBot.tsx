import React from 'react'
import './ChatBot.css'
import ChatView from '../pages/ChatView'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Chatbot: React.FC<Props> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

  return (
    <div className="chatbot-container">
        <div className="div_close">
        <button className="chatbot-close" onClick={onClose}>✖</button>
        </div>
      <ChatView cerrarChat={onClose} />
    </div>
  )
}

export default Chatbot