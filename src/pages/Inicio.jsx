import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <section>
      <div>
        <p>Hola, soy</p>
        <h1>Scarleth Friz</h1>
        <h2> Estudiante de Informatica </h2>
        <p>
          Bienvenido a mi portafolio. te invito a explorarlo para conocerme mejor
        </p>
        <Link to="/sobremi">Explorar</Link>
      </div>

    </section>
  )
}