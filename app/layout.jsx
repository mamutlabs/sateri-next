import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL('https://sateri.do'),
  title: { default: 'SATERI — Servicios Técnicos Premium en Santiago, RD', template: '%s | SATERI' },
  description: 'Técnicos certificados de climatización, plomería, electricidad y línea blanca en los sectores más exclusivos de Santiago de los Caballeros.',
  openGraph: {
    type: 'website',
    locale: 'es_DO',
    url: 'https://sateri.do',
    siteName: 'SATERI',
    images: [{ url: '/assets/icon-512.png', width: 512, height: 512 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/assets/icon-192.png" />
        <link rel="manifest" href="/assets/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <meta name="theme-color" content="#122c26" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#f4f7f6', fontFamily: 'Inter, sans-serif', color: '#1a1c1c', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <style>{`
          * { box-sizing: border-box; }
          html, body { scrollbar-width: none; }
          html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; }
          main { flex: 1; }
          .gracias-desktop { display: block; }
          .gracias-mobile  { display: none;  }
          .header-nav { display: flex; }
          .seo-hero-grid { display: grid; grid-template-columns: 7fr 5fr; gap: 64px; align-items: center; }
          @media (max-width: 768px) {
            .gracias-desktop { display: none; }
            .gracias-mobile  { display: block; }
            .header-nav { display: none; }
            .header-inner { padding: 12px 16px !important; }
            .header-logo-text { font-size: 18px !important; }
            .header-cta { font-size: 11px !important; padding: 8px 14px !important; }
            .seo-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .seo-hero-form { display: none; }
            .seo-mobile-form { display: block !important; }
            .seo-mobile-cta { display: block !important; }
            .sectors-grid { gap: 40px !important; }
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GK76E3WY3V"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GK76E3WY3V');
        `}</Script>
      </body>
    </html>
  );
}
