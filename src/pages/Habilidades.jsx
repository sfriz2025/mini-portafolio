export default function Habilidades() {
  const habilidades = [
    { nombre: 'HTML', nivel: 'Basico-Intermedio' },
    { nombre: 'CSS', nivel: 'Basico-Intermedio' },
    { nombre: 'JavaScript', nivel: 'Basico' },
    { nombre: 'React', nivel: 'Basico' },
    { nombre: 'Responsive Design', nivel: 'Basico'},
    { nombre: 'UX/UI', nivel: 'Básico' },
  ]

  const herramientas = ['Git', 'GitHub', 'VS Code', 'Figma', 'Vite', 'NPM']

  return (
    <section>
      <h1>Habilidades</h1>

      <div>
        {habilidades.map((habilidad) => (
          <article key={habilidad.nombre}>
            <h3>{habilidad.nombre}</h3>
            <p>{habilidad.nivel}</p>
          </article>
        ))}
      </div>

      <div>
        <h2>Herramientas</h2>
        <ul>
          {herramientas.map((herramienta) => (
            <li key={herramienta}>{herramienta}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}