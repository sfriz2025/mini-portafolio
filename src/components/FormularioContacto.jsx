import { useState } from 'react';

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.';
    } else if (!emailRegex.test(formData.correo)) {
      nuevosErrores.correo = 'Ingresa un correo electrónico válido.';
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true);
      setFormData({
        nombre: '',
        correo: '',
        mensaje: '',
      });
    }
  };

  return (
    <div className="formulario-container">
      {enviado && (
        <div className="mensaje-exito">
          ¡Gracias por escribir! Tu mensaje ha sido enviado correctamente.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="formulario-contacto">
        {/* Campo Nombre */}
        <fieldset className="campo-group">
          <label htmlFor="nombre">Nombre *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
          {errores.nombre && <span className="error-text">{errores.nombre}</span>}
        </fieldset>

        {/* Campo Correo */}
        <fieldset className="campo-group">
          <label htmlFor="correo">Correo electrónico *</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="tu@email.com"
          />
          {errores.correo && <span className="error-text">{errores.correo}</span>}
        </fieldset>

        {/* Campo Mensaje */}
        <fieldset className="campo-group">
          <label htmlFor="mensaje">Mensaje *</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
          {errores.mensaje && <span className="error-text">{errores.mensaje}</span>}
        </fieldset>

        <button type="submit" className="link-button btn-submit">
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}