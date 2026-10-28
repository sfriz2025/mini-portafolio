import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import Habilidades from './pages/Habilidades'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </>
  )
}

export default App

