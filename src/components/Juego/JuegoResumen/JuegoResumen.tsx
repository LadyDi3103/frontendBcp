import React from 'react'
import './JuegoResumen.css'

const JuegoResumen: React.FC = () => {
  return (
    <div className="aprendizaje-wrapper">
      <div className="confetti-background"></div>
      <div className="aprendizaje-card">
        <h3>¿Qué aprendimos?</h3>
        <p>
          Hemos aprendido diferentes opciones para hacer nuestros pagos, entre ellas:
        </p>
        <ul>
          <li>Las tarjetas de débito</li>
          <li>Las tarjetas de crédito o yape</li>
        </ul>
        <p>Usa la que mejor se acomode a tus necesidades.</p>
      </div>
    </div>
  )
}

export default JuegoResumen