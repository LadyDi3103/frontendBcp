import "./JuegoResultado.css";

interface JuegoResultadoProps {
  resultado: string;
  onRestart: () => void;
}

const JuegoResultado: React.FC<JuegoResultadoProps> = ({ resultado, onRestart }) => {
  return (
    <div className="juego-resultado">
      <h2>{resultado}</h2>
      <button className="juego-restart" onClick={onRestart}>Reintentar</button>
    </div>
  );
};

export default JuegoResultado;
