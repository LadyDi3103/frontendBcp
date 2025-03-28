import "./JuegoPregunta.css";

interface JuegoPreguntaProps {
  pregunta: string;
  opciones: string[];
  onSelect: (opcion: string) => void;
}

const JuegoPregunta: React.FC<JuegoPreguntaProps> = ({ pregunta, opciones, onSelect }) => {
  return (
    <div className="juego-pregunta">
      <h2>{pregunta}</h2>
      <div className="juego-opciones">
        {opciones.map((opcion, index) => (
          <button key={index} className="juego-opcion" onClick={() => onSelect(opcion)}>
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JuegoPregunta;
