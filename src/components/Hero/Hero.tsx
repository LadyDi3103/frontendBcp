import { useNavigate } from "react-router-dom";
import "./Hero.css";
// import "../../index.css";
import "../../index.css";
const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="hero container">
            <div className="hero__content">
                <div className="hero__text">
                    <h1 className="hero__title">
                        <span className="hero__highlight">¿Ahorro</span><br /> Interés y seguros?
                    </h1>
                    <p className="hero__description mt-4">
                        Con cada reto de nivel vas subiendo y tus finanzas vas entendiendo.
                    </p>
                    <button className="btn btn-lg hero__cta mt-4"
                        onClick={() => navigate("/juegos")}
                        type="button">Jugar ahora
                    </button>
                </div>
                <div className="hero__image">
                    <img src="/src/assets/hero/mockup.png" alt="Vista de la app en un celular" />
                </div>
            </div>
        </section>
    );
};

export default Hero;