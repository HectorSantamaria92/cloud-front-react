import { useState } from 'react'
import { Link } from 'react-router'

function Tareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Crear proyecto con Vite', hecha: true },
    { id: 2, texto: 'Configurar GitHub Actions', hecha: false },
  ])
  const [texto, setTexto] = useState('')

  const agregar = (e) => {
    e.preventDefault()
    if (!texto.trim()) return
    setTareas([...tareas, { id: Date.now(), texto: texto.trim(), hecha: false }])
    setTexto('')
  }

  const alternar = (id) =>
    setTareas(tareas.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)))

  const eliminar = (id) => setTareas(tareas.filter((t) => t.id !== id))

  const pendientes = tareas.filter((t) => !t.hecha).length

  return (
    <section className="page">
      <h1>Tareas</h1>
      <p>
        Tienes <code>{pendientes}</code> tarea(s) pendiente(s)
      </p>

      <form className="row" onSubmit={agregar}>
        <input
          className="input"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button type="submit" className="counter">
          Agregar
        </button>
      </form>

      <ul className="list">
        {tareas.map((t) => (
          <li key={t.id} className={t.hecha ? 'done' : ''}>
            <label>
              <input
                type="checkbox"
                checked={t.hecha}
                onChange={() => alternar(t.id)}
              />
              {t.texto}
            </label>
            <button type="button" className="link-btn" onClick={() => eliminar(t.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <Link to="/contacto" className="counter">
        ¿Dudas? Ir a Contacto →
      </Link>
    </section>
  )
}

export default Tareas
