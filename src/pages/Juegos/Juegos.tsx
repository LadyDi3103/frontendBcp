import MainLayout from "../../Layout/MainLayout/MainLayout";
import { useEffect, useState } from "react";
import "./Juegos.css";

const hardcodedUser = {
    email: "isabel@example.com",
    password: "123456",
    name: "Isabel Torres",
    avatar: "/src/assets/juego/avatar_isabel.png",
    points: 0,
};

const Juego = () => {
    const [showGame, setShowGame] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userData, setUserData] = useState({ email: "", password: "" });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (userData.email === hardcodedUser.email && userData.password === hardcodedUser.password) {
            setUserLoggedIn(true);
        } else {
            alert("Correo o contraseña incorrectos");
        }
    };

    if (showGame || userLoggedIn) {
        return (
            <MainLayout>
                <section className="game-view">
                    <div className="game__container">
                        <p className="game__greeting">🌞 Buenos días</p>
                        {userLoggedIn && <h2 className="game__username">{hardcodedUser.name}</h2>}
                        <div className="game__profile">
                            <img src={userLoggedIn ? hardcodedUser.avatar : "/src/assets/juego/avatar_default.png"} alt="Avatar" />
                        </div>
                        <div className="game__points">
                            <p>Puntos acumulados</p>
                            <span>{hardcodedUser.points} pts</span>
                        </div>
                        <p className="game__description">Descubre cómo mejorar tus finanzas con historias reales</p>
                        <div className="game__options">
                            <div className="game__card">Medios de pago</div>
                            <div className="game__card">Servicios bancarios</div>
                            <div className="game__card">Ahorro en acción</div>
                            <div className="game__card">Teoría divertida</div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        );
    }

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
                            <button type="button" className="juego__btn probar" onClick={() => setShowGame(true)}>Probar juego</button>
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

export default Juego;
