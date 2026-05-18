'use client';
import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import HeroSearch from './HeroSearch';
const ServicesCarousel = React.lazy(() => import('./ServicesCarousel'));
const SectorsMap = React.lazy(() => import('./SectorsMap'));
const HowItWorks = React.lazy(() => import('./HowItWorks'));
const Testimonials = React.lazy(() => import('./Testimonials'));
const CtaBand = React.lazy(() => import('./CtaBand'));

const Spinner = () => <div style={{ height: '200px' }} />;

export default function HomeClient({ pages }) {
  const router = useRouter();

  return (
    <>
      <HeroSearch
        pages={pages}
        onSelectService={(page) => page ? router.push(`/servicio/${page.slug}`) : router.push('/contact')}
      />
      <Suspense fallback={<Spinner />}>
        <ServicesCarousel
          pages={pages}
          onSelectCategory={(cat) => {
            const match = pages.find(p => p.serviceCategory === cat.serviceCategory);
            match ? router.push(`/servicio/${match.slug}`) : router.push('/contact');
          }}
        />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <SectorsMap />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <CtaBand />
      </Suspense>
    </>
  );
}
