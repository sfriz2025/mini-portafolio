export default function SobreMi() {
  const intereses = [
    'Desarrollo Web y tecnologias Frontend',
    'Aprender nuevas herramientas y frameworks',
    'Construir proyectos que generen un impacto real',
  ]

  return (
    <section>
      <h1>Sobre mí</h1>
        <article>
            <p>
                Soy Scarleth, estudiante de Ingenieria Civil Informatica. Me apasiona el desarrollo web y 
                me interesa crear soluciones tecgnologicas que mejoren la experiencia de las personas 
            </p>
        </article>

        <article>
            <h2>¿Que estudio?</h2>
            <p>
                Estudio Ingenieria Civil Informatica en el Instituto tecnologico de la Universidad Catolica
                de Temuco
            </p>
        </article>
        <h2>Intereses</h2>
        <ul>
            {intereses.map((interes) => (
            <li key={interes}>{interes}</li>
            ))}
        </ul>
        </section>
  )
}