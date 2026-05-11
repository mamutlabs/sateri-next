import { Suspense } from 'react';
import GraciasPage from '@/components/GraciasPage';

export const metadata = { title: 'Gracias — Solicitud recibida' };

export default function GraciasRoute() {
  return (
    <Suspense>
      <GraciasPage />
    </Suspense>
  );
}
