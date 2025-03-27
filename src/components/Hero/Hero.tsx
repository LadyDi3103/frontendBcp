import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="hero">
            <div className="container text-center py-5">
                <h1 className="home__titulo">¿Ahorro <span>Interés y seguros?</span></h1>
                <p className="home__descripcion">Con cada reto de nivel vas subiendo y tus finanzas vas entendiendo.</p>
                <button className="btn btn-primary home__boton"
                onClick={() => navigate("/juegos")}
                >Jugar ahora
                </button>
            </div>
        </section>
    );
};

export default Hero;