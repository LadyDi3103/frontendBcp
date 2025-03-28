import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from "./pages/Home/Home";
import Juegos from "./pages/Juegos/Juegos";
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juegos" element={<Juegos />} />
      </Routes>
    </Router>
  )
}

export default App
