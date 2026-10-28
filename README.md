**¿Que es el Portafolio?**
El portafolio es un proyecto que nos presenta para un publico que se vea interesado 
en nosotros


**Secciones del portafolio**
El portafolio tiene las siguientes secciones:
1-**Inicio**
2-**SobreMi**
3-**Habilidades**
4-**Proyectos**
5-**Contactos**

**Requisitos e instalacion**

-Con el siguiente comando se instala npm
-npm install

**Como ejecutarlo**

-Se ejecuta con el siguiente comado:

--"npm run dev"

**Estructura de carpetas**

```text
mini-portafolio/
├─ public/
│  ├─ favicon.svg
│  └─ icons.svg
├─ src/
│  ├─ assets/
│  │  ├─ hero.png
│  │  └─ vite.svg
│  ├─ components/
│  │  ├─ FormularioContacto.jsx
│  │  ├─ Header.jsx
│  │  └─ TarjetaProyecto.jsx
│  ├─ pages/
│  │  ├─ Contacto.jsx
│  │  ├─ Habilidades.jsx
│  │  ├─ Inicio.jsx
│  │  ├─ Proyectos.jsx
│  │  └─ SobreMi.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ .gitignore
├─ index.html
├─ package.json
├─ README.md
├─ vite.config.js
└─ uso_IA.txt
```

**Rutas y muestra cada una**
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

**Dificultades del trabajo**

En las instrucciones paso a paso a medida que avanzaba cuando empeze a hacerlo por mi cuenta
hubo momentos en que no entendia que querian decir algunas intrucciones ya que me confundia con la redaccion por lo cual en un punto de desesperacion por no entender y ver el avance de mis compañeros recorri a la IA cuando trate de no usarla en lo posible.

