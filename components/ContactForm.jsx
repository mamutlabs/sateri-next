'use client';
import React from 'react';
import { useRouter } from 'next/navigation';


const ContactForm = ({ initialService }) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nombre: '',
    apellido: '',
    email: '',
    servicio: initialService || 'Limpieza de muebles',
    sector: '',
    descripcion: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const esLavanderia = formData.servicio === 'Lavandería';
  const subtitulo = esLavanderia
    ? 'Le enviamos un mensajero a recoger sus prendas y las devolvemos limpias y planchadas. Le contactamos en menos de 30 minutos durante horario laboral.'
    : 'Le asignamos un técnico certificado y le contactamos en menos de 30 minutos durante horario laboral.';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScBSrLX9FZVY-qXpZBTfwQy-RPT6Fid8ccfalDBDT8tsm-mng/formResponse';
    
    // Convert object to URLSearchParams
    const data = new URLSearchParams();
    data.append('entry.1831887334', formData.nombre);
    data.append('entry.1781954484', formData.apellido);
    data.append('entry.1017502908', formData.email);
    data.append('entry.1950213986', formData.servicio);
    data.append('entry.999810724', formData.sector);
    data.append('entry.367902285', formData.descripcion);

    try {
      // Use no-cors to bypass CORS policy. We won't get a readable response back, but the form will be submitted.
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString()
      });
      router.push(`/gracias?nombre=${encodeURIComponent(formData.nombre)}`);
    } catch (error) {
      console.error('Error enviando formulario:', error);
      // Even on error with no-cors, it might have been submitted, but we show error if fetch completely fails
      alert('Hubo un problema de conexión al enviar el formulario.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', padding: '14px 16px', fontFamily: 'Inter', fontSize: 15,
    border: '1px solid #E1E5E3', borderRadius: 12, background: '#fff', color: '#1a1c1c',
    outline: 'none', boxSizing: 'border-box'
  };
  const labelStyle = {
    fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.18em',
    textTransform: 'uppercase', color: '#717976', marginBottom: 8, display: 'block'
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 520, margin: '0 auto', background: '#fff', padding: 40,
        borderRadius: 24, boxShadow: '0 25px 50px -12px rgba(18,44,38,.18)'
      }}>
      <p style={{ fontFamily: 'Inter', color: '#4A5552', fontSize: 14, marginBottom: 28 }}>
        {subtitulo}
      </p>

      <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Nombre</label>
          <input required name="nombre" value={formData.nombre} onChange={handleChange} type="text" style={inputStyle} placeholder="Ej. Juan" />
        </div>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Apellido</label>
          <input required name="apellido" value={formData.apellido} onChange={handleChange} type="text" style={inputStyle} placeholder="Ej. Pérez" />
        </div>
      </div>
      
      <div style={{ marginBottom: 18 }}>
        <label style={labelStyle}>Correo Electrónico</label>
        <input required name="email" value={formData.email} onChange={handleChange} type="email" style={inputStyle} placeholder="juan.perez@ejemplo.com" />
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Servicio</label>
          <select required name="servicio" value={formData.servicio} onChange={handleChange} style={inputStyle}>
            <option value="Climatización · A/C">Climatización · A/C</option>
            <option value="Plomería">Plomería</option>
            <option value="Electricidad">Electricidad</option>
            <option value="Línea Blanca">Línea Blanca</option>
            <option value="Lavandería">Lavandería</option>
            <option value="Limpieza de muebles">Limpieza de muebles</option>
            <option value="Servicio General">Otro (Especificar en detalles)</option>
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Sector (Santiago)</label>
          <input required name="sector" value={formData.sector} onChange={handleChange} type="text" style={inputStyle} placeholder="Ej. Villa Olga" />
        </div>
      </div>

      <div style={{ marginBottom: 28 }}>
        <label style={labelStyle}>Notas adicionales <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(opcional)</span></label>
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} rows={3} style={{ ...inputStyle, resize: 'none' }} placeholder="Modelo del equipo, urgencia, horario preferido…" />
      </div>

      <button disabled={loading} type="submit" style={{
        width: '100%', background: loading ? '#717976' : '#122c26', color: '#fff',
        fontFamily: 'Inter', fontWeight: 700, fontSize: 14, padding: '16px',
        borderRadius: 9999, border: 0, cursor: loading ? 'wait' : 'pointer'
      }}>
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};



export default ContactForm;
