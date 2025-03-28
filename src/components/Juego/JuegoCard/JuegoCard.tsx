import "../JuegoCard/JuegoCard.css";
import "../../../index.css";
import "./JuegoCard.css";

interface Props {
    titulo: string
    descripcion: string
    imagen: string
    onClick?: () => void;
  }

  const JuegoCard: React.FC<Props> = ({ titulo, descripcion, imagen, onClick }) => {
    return (
      <div className="medios__card" onClick={onClick}>
        <h3 className="medios__titulo">{titulo}</h3>
        <img src={imagen} alt={titulo} className="card__imagen" />
        <p className="medios__descripcion">{descripcion}</p>
      </div>
    )
  }
  
  export default JuegoCard
