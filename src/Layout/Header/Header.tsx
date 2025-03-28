
import React from 'react'
import './Header.css'
import logo from '../../assets/logos/logo_desktop.png';

const Header: React.FC = () => {
  return (
    <div className='d-flex justify-content-center'>
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <ul className="navbar-links">
      <li><a href="#inicio">Inicio</a></li>
        <li><a href="#como-funciona">¿Cómo funciona?</a></li>
        <li><a href="#beneficios">Beneficios</a></li>
        <li><a href="#faq">Preguntas frecuentes</a></li>
        <li><a href="#resenas">Reseñas</a></li>
        <li><a href="#quienes-somos">¿Quiénes somos?</a></li>
      </ul>

      <div className="navbar-right">
        <button className="btn-jugar">Jugar ahora</button>
      </div>
    </nav>
    </div>

  )
}

export default Header