import "./JuegoModal.css";

interface JuegoModalProps {
  isOpen: boolean;
  onClose: () => void;
  titulo: string;
  descripcion: string;
  imagen: string;
  onClick: () => void;
}

const JuegoModal: React.FC<JuegoModalProps> = ({ isOpen, onClose, titulo, descripcion, imagen, onClick }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="opcion-card">
          <div className="contenido">
            <img src={imagen} alt="Mascota BCP" className="opcion-img" />
            <div className="opcion-texto">
              <h4>{titulo}</h4>
              <p>{descripcion}</p>
            </div>
          </div>
          <button className="boton-entendido" onClick={onClick}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default JuegoModal;