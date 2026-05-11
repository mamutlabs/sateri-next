import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contacto',
  description: 'Contáctenos y un experto de SATERI le atenderá en menos de 30 minutos durante horario laboral.',
};

export default function ContactPage() {
  return (
    <section style={{ padding: '128px 24px 96px', background: '#f4f7f6', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ fontFamily: '"Playfair Display",serif', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 700, color: '#122c26', margin: '0 0 12px' }}>
          Hablemos.
        </h1>
        <p style={{ fontFamily: 'Inter', color: '#414846', fontSize: 17 }}>
          Cuéntenos qué necesita y un experto le contactará.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
