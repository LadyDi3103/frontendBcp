import React from "react";
import { useState } from "react";

import "./JuegoLogin.css";
import MainLayout from "../../../Layout/MainLayout/MainLayout";

const hardcodedUser = {
  email: "isabel@example.com",
  password: "123456",
  name: "Isabel Torres",
  avatar: "/src/assets/juego/avatar_isabel.png",
  points: 0,
};

interface JuegoLoginProps {
  onLogin: (e: React.FormEvent) => void;
  onTryGame: () => void;
}

const  JuegoLogin: React.FC<JuegoLoginProps> = ({ onLogin, onTryGame }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.email === hardcodedUser.email && userData.password === hardcodedUser.password) {
      onLogin(e);
      setUserData({ email: "", password: "" });
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <MainLayout>
    <section className="juego">
      <div className="juego__container">
        <div className="juego__avatar">
          <img src="/src/assets/juego/mascota_sobre_logo.png" alt="Avatar del juego" />
        </div>
        <div className="juego__login">
          <h1 className="juego__titulo">
            <img src="/src/assets/juego/logo_cover_juego.png" alt="Logo del juego" />
          </h1>
          <p className="juego__subtitle">Inicia sesión</p>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@gmail.com"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />

            <a href="#" className="juego__forgot">Olvidé mi contraseña</a>

            <button type="submit" className="juego__btn ingresar">Ingresar</button>
            <button type="button" className="juego__btn probar" onClick={onTryGame}>
              Probar juego
            </button>
          </form>

          <p className="juego__register">
            ¿No tienes cuenta? <a href="#">Regístrate aquí</a>
          </p>
        </div>
      </div>
    </section>
    </MainLayout>
  );
};

export default JuegoLogin;
