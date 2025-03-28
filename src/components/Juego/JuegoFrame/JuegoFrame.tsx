import React from "react";
import "./JuegoFrame.css"
// import Menu from "../Menu/Menu";

interface JuegoCardProps {
  children: React.ReactNode;
}

const JuegoCard: React.FC<JuegoCardProps> = ({ children }) => {
  console.log("Renderizando JuegoCard");
  return (
    <section className="juego-container__card">
    <div className="juego-card">
      {children}
    </div>
    </section>

  );
};

export default JuegoCard;
