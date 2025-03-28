import React from 'react'
import './NoPuntos.css'
import "../../../index.css";

interface Props {
  onRegistroClick: () => void
  ardillaImg: string
  monedaImg: string
}

const NoPuntos: React.FC<Props> = ({ onRegistroClick, ardillaImg, monedaImg }) => {
  return (
    <div className="pena-card my-4">
      <h3>¡UY QUE PENA 😢!</h3>
      <h4>HUBIERAS GANADO 3 MONEDAS</h4>
      <p>
        Qué esperas, gana puntos <span className="link" onClick={onRegistroClick}>Regístrate</span>
      </p>
      <div className="monedas">
        <img src={monedaImg} alt="moneda" />
        <img src={monedaImg} alt="moneda" />
        <img src={monedaImg} alt="moneda" />
      </div>
      <img src={ardillaImg} alt="Ardilla triste" className="ardilla" />
    </div>
  )
}

export default NoPuntos