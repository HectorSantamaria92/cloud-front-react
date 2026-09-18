import { NavLink, Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Tareas from './pages/Tareas.jsx'
import Contacto from './pages/Contacto.jsx'
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/tareas">Tareas</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Redirecciones */}
        <Route path="/inicio" element={<Navigate to="/" replace />} />
        <Route path="/todo" element={<Navigate to="/tareas" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
