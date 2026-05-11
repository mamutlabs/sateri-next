'use client';
import { useRouter } from 'next/navigation';
import React from 'react';


const SECTIONS = [
  {
    title: 'Aceptación de los términos',
    body: `Al utilizar el sitio web de SATERI (sateri.do) y solicitar cualquiera de nuestros servicios, usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice nuestros servicios.`
  },
  {
    title: 'Descripción del servicio',
    body: `SATERI es una plataforma que conecta a usuarios con técnicos certificados para servicios de climatización, plomería, electricidad, línea blanca, lavandería y limpieza en Santiago de los Caballeros, República Dominicana. SATERI actúa como intermediario entre el cliente y el técnico asignado.`
  },
  {
    title: 'Proceso de solicitud',
    body: `Al completar el formulario de solicitud, usted proporciona su información de contacto y descripción del servicio. Esta solicitud no constituye una reserva confirmada hasta que un representante de SATERI le contacte y confirme la disponibilidad del técnico. SATERI se reserva el derecho de rechazar solicitudes que no cumplan con los criterios de cobertura o disponibilidad.`
  },
  {
    title: 'Cobertura geográfica',
    body: `Los servicios de SATERI están disponibles exclusivamente en sectores seleccionados de Santiago de los Caballeros, República Dominicana. La disponibilidad puede variar según el sector, el tipo de servicio y la demanda del momento.`
  },
  {
    title: 'Garantía del servicio',
    body: `Todo trabajo realizado por un técnico de SATERI incluye garantía por escrito según las condiciones específicas del servicio prestado. En caso de inconformidad con el trabajo realizado, el cliente deberá notificar a SATERI dentro de los 5 días hábiles posteriores a la visita del técnico.`
  },
  {
    title: 'Precios y pagos',
    body: `Los precios de los servicios son fijados según el diagnóstico del técnico y comunicados al cliente antes de comenzar cualquier trabajo. El pago se realiza directamente al técnico o a través de los métodos habilitados en la app SATERI. Los diagnósticos a domicilio pueden tener un costo que se descontará del servicio final si el cliente acepta proceder.`
  },
  {
    title: 'Limitación de responsabilidad',
    body: `SATERI no se hace responsable por daños preexistentes en equipos o instalaciones del cliente, ni por consecuencias derivadas de situaciones fuera del control del técnico asignado. La responsabilidad máxima de SATERI ante cualquier reclamo se limita al monto pagado por el servicio específico en disputa.`
  },
  {
    title: 'Modificaciones',
    body: `SATERI se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigencia al momento de su publicación en este sitio. El uso continuado de los servicios implica la aceptación de los términos vigentes.`
  },
  {
    title: 'Ley aplicable',
    body: `Estos términos se rigen por las leyes de la República Dominicana. Cualquier disputa será resuelta ante los tribunales competentes de Santiago de los Caballeros, República Dominicana.`
  },
];

const TerminosPage = () => {
  const router = useRouter();
  
  return (
    <div style={{ minHeight: '100vh', background: '#f4f7f6', paddingTop: 80 }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #122c26 0%, #1a3c34 100%)', padding: 'clamp(48px,6vw,80px) 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#96f996', marginBottom: 16 }}>
            ● Términos y condiciones
          </div>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-.02em', margin: '0 0 20px' }}>
            Términos de uso.
          </h1>
          <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 16, color: '#a9cfc2', lineHeight: 1.6, margin: 0 }}>
            Última actualización: mayo 2026. Al utilizar los servicios de SATERI, usted acepta los siguientes términos y condiciones.
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

export default TerminosPage;
