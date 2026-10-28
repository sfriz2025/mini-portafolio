import {Navlink} from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Navlink to= "/" end>
                        Inicio
                    </Navlink>
                </li>
                <li>
                    <Navlink to= "/" end>
                        SobreMi
                    </Navlink>
                </li>
                <li>
                    <Navlink to="/" end>
                        Habilidades
                    </Navlink>
                </li>
                <li>
                    <Navlink to= "/" end>
                        Proyectos
                    </Navlink>
                </li>
                <li>
                    <Navlink to= "/" end>
                        Contacto
                    </Navlink>
                </li>
            </ul>
        </nav>
    </header>
  );
}