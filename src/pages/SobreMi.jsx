export default function SobreMi() {
  const intereses = [
    'Diseño de interfaces',
    'Desarrollo frontend con React',
    'Optimización y accesibilidad',
    'Aprender nuevas herramientas y metodologías',
  ]

  return (
    <section>
      <h1>Sobre mí</h1>

    <article>
        <p>
            Actualmente estoy estudiando Ingenieria Civil Informatica y me interesa crear
            soluciones web que combinen estética, funcionalidad y buena experiencia
            para las personas.
        </p>
    </article>
    <article>
        <p>
            Me gusta trabajar con HTML, CSS, JavaScript y React, aunque sigo adaptandome.
        </p>
    </article>
    <article>
        <p>
            Mi objetivo es seguir creciendo en el área de diseño y desarrollo web,
            aportar valor en proyectos con impacto positivo y avanzar hacia una
            carrera enfocada en interfaces modernas, accesibles y bien pensadas.
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