//import { useNavigate } from "react-router-dom";
import "./Menu.css";
import { FaHome, FaSearch, FaFacebook, FaUser, FaCog } from 'react-icons/fa'
import "../../../index.css";

const Menu = () => {
    //const navigate = useNavigate();
    return (
        <div className="bottom-nav">
      <div className="nav-item">
        <FaHome />
        <span>Inicio</span>
      </div>
      <div className="nav-item">
        <FaSearch />
        <span>Buscar</span>
      </div>

      <div className="nav-center">
        <button className="nav-button">
          <FaCog />
        </button>
      </div>

      <div className="nav-item">
        <FaFacebook />
        <span>Facebook</span>
      </div>
      <div className="nav-item">
        <FaUser />
        <span>Perfil</span>
      </div>
    </div>
    );
};

export default Menu;