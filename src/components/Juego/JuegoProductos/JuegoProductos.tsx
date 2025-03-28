import React from 'react'
import './JuegoProductos.css'

const JuegoProductos: React.FC = () => {
  return (
    <div className="opcion-conocida-wrapper">
      <div className="fondo-azul"></div>
      <div className="opcion-conocida-card">
        <h3>Ahora que conoces las opciones …</h3>
        <p>
          y te interesa alguna de ellas,<br />
          puedes conocer más sobre nuestros productos
        </p>
      </div>
    </div>
  )
}

export default JuegoProductos