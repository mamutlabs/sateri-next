'use client';
import { useRouter } from 'next/navigation';
import React from 'react';


const SECTIONS = [
  {
    title: 'Información que recopilamos',
    body: `Al solicitar un servicio a través de SATERI, recopilamos su nombre, apellido, correo electrónico, sector de residencia y descripción del servicio requerido. Esta información es necesaria para asignar y coordinar al técnico correspondiente.`
  },
  {
    title: 'Uso de la información',
    body: `La información proporcionada se utiliza exclusivamente para: (1) coordinar la prestación del servicio solicitado, (2) comunicarnos con usted respecto al estado de su solicitud, y (3) mejorar la calidad de nuestro servicio. No vendemos, alquilamos ni compartimos su información con terceros con fines comerciales.`
  },
  {
    title: 'Comunicaciones',
    body: `Al enviar su solicitud, acepta que SATERI se comunique con usted por correo electrónico o teléfono para confirmar la asignación del técnico y coordinar la visita. Puede solicitar la eliminación de sus datos en cualquier momento escribiendo a privacidad@sateri.do.`
  },
  {
    title: 'Seguridad de los datos',
    body: `Sus datos se transmiten mediante conexiones cifradas (HTTPS) y se almacenan en servidores seguros. Implementamos medidas técnicas y organizativas razonables para proteger su información contra acceso no autorizado.`
  },
  {
    title: 'Cookies y análisis',
    body: `Este sitio puede utilizar cookies de análisis para entender cómo los usuarios interactúan con la plataforma. No utilizamos cookies de rastreo publicitario de terceros. Puede deshabilitar las cookies desde la configuración de su navegador sin afectar la funcionalidad principal del sitio.`
  },
  {
    title: 'Contacto sobre privacidad',
    body: `Si tiene preguntas sobre el tratamiento de sus datos personales, puede contactarnos en privacidad@sateri.do. Responderemos en un plazo máximo de 5 días hábiles.`
  },
];

const PrivacidadPage = () => {
  const router = useRouter();
  
  return (
    <div style={{ minHeight: '100vh', background: '#f4f7f6', paddingTop: 80 }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #122c26 0%, #1a3c34 100%)', padding: 'clamp(48px,6vw,80px) 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#96f996', marginBottom: 16 }}>
            ● Política de privacidad
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 20px' }}>
            Su privacidad nos importa.
          </h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 16, color: '#a9cfc2', lineHeight: 1.6, margin: 0 }}>
            Última actualización: mayo 2026. Esta política describe cómo SATERI recopila, usa y protege la información que usted nos proporciona.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: 'clamp(48px,6vw,80px) 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {SECTIONS.map((s, i) => (
            <div key={i} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: i < SECTIONS.length - 1 ? '1px solid rgba(18,44,38,.08)' : 'none' }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontWeight: 700, color: '#122c26', margin: '0 0 14px' }}>
                {s.title}
              </h2>
              <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#414846', lineHeight: 1.75, margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}

          <button onClick={() => router.back()} style={{
            background: 'transparent', border: 0, fontFamily: 'Inter', fontSize: 13,
            color: '#717976', cursor: 'pointer', padding: 0, marginTop: 8
          }}>← Volver</button>
        </div>
      </section>
    </div>
  );
};

export default PrivacidadPage;
