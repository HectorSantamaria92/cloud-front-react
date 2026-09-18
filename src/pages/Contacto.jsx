import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const SEGUNDOS_REDIRECCION = 3

function Contacto() {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [segundos, setSegundos] = useState(SEGUNDOS_REDIRECCION)

  // Tras enviar, cuenta atrás y redirección programática a Inicio
  useEffect(() => {
    if (!enviado) return
    if (segundos === 0) {
      navigate('/')
      return
    }
    const timer = setTimeout(() => setSegundos((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [enviado, segundos, navigate])

  const enviar = (e) => {
    e.preventDefault()
    if (!nombre.trim() || !mensaje.trim()) return
    setEnviado(true)
  }

  if (enviado) {
    return (
      <section className="page">
        <h1>¡Gracias, {nombre}!</h1>
        <p>
          Mensaje recibido. Volviendo a Inicio en <code>{segundos}</code>...
        </p>
        <button type="button" className="counter" onClick={() => navigate('/tareas')}>
          Mejor llévame a Tareas
        </button>
      </section>
    )
  }

  return (
    <section className="page">
      <h1>Contacto</h1>
      <p>Envíanos un mensaje</p>

      <form className="form" onSubmit={enviar}>
        <input
          className="input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
        />
        <textarea
          className="input"
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Tu mensaje"
        />
        <button type="submit" className="counter">
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contacto
