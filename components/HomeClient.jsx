'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import HeroSearch from './HeroSearch';
import ServicesCarousel from './ServicesCarousel';
import SectorsMap from './SectorsMap';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import CtaBand from './CtaBand';

export default function HomeClient({ pages }) {
  const router = useRouter();

  return (
    <>
      <HeroSearch
        pages={pages}
        onSelectService={(page) => page ? router.push(`/servicio/${page.slug}`) : router.push('/contact')}
      />
      <ServicesCarousel
        pages={pages}
        onSelectCategory={(cat) => {
          const match = pages.find(p => p.serviceCategory === cat.serviceCategory);
          match ? router.push(`/servicio/${match.slug}`) : router.push('/contact');
        }}
      />
      <SectorsMap />
      <HowItWorks />
      <Testimonials />
      <CtaBand />
    </>
  );
}
