export default function SobreMi() {
  const intereses = [
    'Desarrollo web y tecnologías frontend',
    'Aprender nuevas herramientas y frameworks',
    'Construir proyectos que generen un impacto real',
  ];

  return (
    <section className="sobre-mi-container">
      {/* Sección principal: Foto + Presentación en 2 columnas */}
      <div className="sobre-mi-header">
        <div className="avatar-placeholder">
          {/* SVG o placeholder visual de usuario similar a la imagen */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <div className="sobre-mi-intro">
          <h1>Sobre mí</h1>
          <p>
            Soy Scarleth, estudiante de Ingeniería Civil Informática. Me apasiona
            el desarrollo web y me interesa crear soluciones tecnológicas que
            mejoren la experiencia de las personas.
          </p>
        </div>
      </div>

      {/* Bloque ¿Qué estudio? */}
      <div className="sobre-mi-seccion">
        <h2>¿Qué estudio?</h2>
        <p>
          Estudio Ingeniería Civil Informática en la Universidad Católica de Temuco.
        </p>
      </div>

      {/* Bloque ¿Qué me interesa? */}
      <div className="sobre-mi-seccion">
        <h2>¿Qué me interesa?</h2>
        <ul>
          {intereses.map((interes) => (
            <li key={interes}>{interes}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}