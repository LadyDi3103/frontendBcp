import React from "react";
import { useState } from "react";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import JuegoLogin from "../../components/Juego/JuegoLogin/JuegoLogin";
import "./Juegos.css";
import PuntosAcumulados from "../../components/Juego/Puntos/PuntosAcumulados";
import Menu from "../../components/Juego/Menu/Menu";
import JuegoFrame from "../../components/Juego/JuegoFrame/JuegoFrame";
import JuegoCard from "../../components/Juego/JuegoCard/JuegoCard";

const hardcodedUser = {
    email: "isabel@example.com",
    password: "123456",
    name: "Invitado",
    avatar: "/src/assets/juego/avatar_isabel.png",
    points: 0,
};

const gameOptions = [
    {
        title: "Medios de Pago",
        description: "Conoce los diferentes medios de pago y cómo utilizarlos",
        image: "/src/assets/juego/card_1.png",
    },
    {
        title: "Servicio Bancario",
        description: "Descubre tu banca móvil",
        image: "/src/assets/juego/card_2.png",
    },
    {
        title: "Ahorro en Acción",
        description: "Conoce los productos que tenemos para ti",
        image: "/src/assets/juego/card_3.png",
    },
    {
        title: "Teoría Divertida",
        description: "Aprende de conceptos de manera divertida",
        image: "/src/assets/juego/card_4.png",
    },
];

const Juegos = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const [selectedGame, setSelectedGame] = useState<string | null>(null);
    const [gameStep, setGameStep] = useState<number>(0);
    const [userData, setUserData] = useState({ email: "", password: "" });
    // const [modalOpen, setModalOpen] = useState(false);
    // const [modalMessage, setModalMessage] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (userData.email === hardcodedUser.email && userData.password === hardcodedUser.password) {
            setUserLoggedIn(true);
        } else {
            alert("Correo o contraseña incorrectos");
        }
    };

    const handleGameSelection = (gameTitle: string) => {
        setSelectedGame(gameTitle);
        setGameStep(1);
    };

    const handleNextStep = () => {
        setGameStep((prevStep) => prevStep + 1);
    };

    // const handleOptionSelect = (message) => {
    //     setModalMessage(message);
    //     setModalOpen(true);
    // };

    if (!userLoggedIn && !showGame) {
        return <JuegoLogin onLogin={handleLogin} onTryGame={() => setShowGame(true)} />
    }

    {
        return (
            <MainLayout>
                <JuegoFrame>
                    <section className="game__view">
                        <div className="game__container">
                            <div className="game__header">
                                <p className="game__greeting">🌞 Buenos días</p>
                                {userLoggedIn && <h2 className="game__username">{hardcodedUser.name}</h2>}
                                <div className="game__profile">
                                    <img
                                        src={userLoggedIn ? hardcodedUser.avatar : "/src/assets/juego/avatar_user.png"} alt="Avatar" />
                                </div>
                            </div>
                            <p className="fs-3 fw-bold text-start">{hardcodedUser.name}</p>
                            {/* <p className="fs-3 fw-bold text-start">{selectedGame}</p> */}

                            <div className="game__points">
                                <PuntosAcumulados />
                            </div>

                            {selectedGame === null ? (
                            <>
                                <p className="game__description mt-2">
                                    Descubre cómo mejorar tus finanzas con historias reales
                                </p>
                                <section className="medios-grid mt-4">
                                    <div onClick={() => handleGameSelection("Medios de Pago")}>
                                        <JuegoCard
                                            titulo="Medios de Pago"
                                            descripcion="Conoce los diferentes medios de pago y cómo utilizarlos"
                                            imagen="/src/assets/juego/card_1.png"
                                        />
                                    </div>
                                    <div onClick={() => handleGameSelection("Servicio Bancario")}>
                                        <JuegoCard
                                            titulo="Servicio Bancario"
                                            descripcion="Descubre tu banca móvil"
                                            imagen="/src/assets/juego/card_2.png"
                                        />
                                    </div>
                                    <div onClick={() => handleGameSelection("Ahorro en Acción")}>
                                        <JuegoCard
                                            titulo="Ahorro en Acción"
                                            descripcion="Conoce los productos que tenemos para ti"
                                            imagen="/src/assets/juego/card_3.png"
                                        />
                                    </div>
                                    <div onClick={() => handleGameSelection("Teoría Divertida")}>
                                        <JuegoCard
                                            titulo="Teoría Divertida"
                                            descripcion="Aprende de conceptos de manera divertida"
                                            imagen="/src/assets/juego/card_4.png"
                                        />
                                    </div>
                                </section>
                            </>
                        ) : gameStep === 1 ? (
                            <div className="game__intro">
                                <img src="/src/assets/juego/juanaCover.png" alt="Juana" className="character__image" />
                                <h2>Bienvenida</h2>
                                <p>
                                    Ella es Juana, aprendió a usar medios de pago rápidos y seguros, dejó de hacer colas para pagar sus recibos y logró ahorrar para sus viajes deseados.
                                </p>

                                <button className="btn btn-primary" onClick={handleNextStep}>Empezar</button>

                                
                            </div>
                        ) : gameStep === 2 ? (
                            <div className="game__story">
                                <img src="/src/assets/juego/juanaMarket.png" alt="Pagos Inteligentes" className="story__image" />
                                <h2>Pagos Inteligentes</h2>
                                <p>Aprende a elegir la mejor forma de pago para cada compra.</p>
                                <button className="btn btn-primary">Continuar</button>
                            </div>
                        ) : null}

                         </div>
                    </section>

                    <section className="bg-danger mt-4 container__menu">
                        <Menu />
                    </section>

                </JuegoFrame>
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
                                onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
                            />

                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Ingresa tu contraseña"
                                value={userData.password}
                                onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
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


export default Juegos;
