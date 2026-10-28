export default function Habilidades() {
  const tecnologias = [
    { nombre: 'HTML', porcentaje: '90%', icono: '5' },
    { nombre: 'CSS', porcentaje: '88%', icono: '3' },
    { nombre: 'JavaScript', porcentaje: '75%', icono: 'JS' },
    { nombre: 'React', porcentaje: '70%', icono: '⚛' },
    { nombre: 'TypeScript', porcentaje: '60%', icono: 'TS' },
    { nombre: 'Python', porcentaje: '70%', icono: '🐍' },
  ];

  const herramientas = ['Git', 'GitHub', 'VS Code', 'Figma', 'Node.js', 'Vite', 'NPM'];

  return (
    <section className="habilidades-container">
      <h1>Habilidades y Lenguajes</h1>

      <div className="habilidades-seccion">
        <h2>Tecnologías</h2>
        <div className="tecnologias-grid">
          {tecnologias.map((tec) => (
            <article key={tec.nombre} className="habilidad-card">
              <div className="habilidad-icon">{tec.icono}</div>
              <h3>{tec.nombre}</h3>
              <div className="barra-nivel-container">
                <div
                  className="barra-nivel-fill"
                  style={{ width: tec.porcentaje }}
                ></div>
              </div>
              <span className="porcentaje-texto">{tec.porcentaje}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="habilidades-seccion">
        <h2>Herramientas</h2>
        <div className="herramientas-list">
          {herramientas.map((herramienta) => (
            <span key={herramienta} className="herramienta-badge">
              {herramienta}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}