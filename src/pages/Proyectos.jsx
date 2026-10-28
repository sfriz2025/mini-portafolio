import TarjetaProyecto from '../components/TarjetaProyecto'

const proyectos = [
  {
    titulo: 'Portafolio personal',
    descripcion: 'Sitio web para mostrar mi perfil, proyectos y habilidades.',
    enlace: 'https://github.com/tuusuario/portafolio-personal',
  },
  {
    titulo: 'Landing page de estudio',
    descripcion: 'Página simple para presentar un servicio o marca con diseño limpio.',
    enlace: null,
  },
  {
    titulo: 'App de tareas',
    descripcion: 'Proyecto para organizar actividades con una interfaz sencilla.',
    enlace: 'https://github.com/tuusuario/app-de-tareas',
  },
]

export default function Proyectos() {
  return (
    <section>
      <h1>Proyectos</h1>

      {proyectos.map((proyecto) => (
        <TarjetaProyecto
          key={proyecto.titulo}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          enlace={proyecto.enlace}
        />
      ))}
    </section>
  )
}