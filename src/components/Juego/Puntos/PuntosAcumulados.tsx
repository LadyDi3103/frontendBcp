//import { useNavigate } from "react-router-dom";
import "./PuntosAcumulados.css";
import "../../../index.css";

const hardcodedUser = {
    email: "isabel@example.com",
    password: "123456",
    name: "Isabel Torres",
    avatar: "/src/assets/juego/avatar_isabel.png",
    points: 0,
};

const PuntosAcumulados = () => {
    //const navigate = useNavigate();
    return (
        <div className="puntos-card">
        <div className="puntos-left">
          <p className="puntos-titulo">Puntos acumulados</p>
          <div className="puntos-contenido">
            <span className="puntos-texto">{hardcodedUser.points} pts</span>
          </div>
        </div>
        <div className="puntos-icono-derecha">
        <img src="/src/assets/juego/coin.png" alt="" />
        </div>
      </div>
    );
};

export default PuntosAcumulados;