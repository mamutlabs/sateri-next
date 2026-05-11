import { runQuery } from '@/lib/firestore';
import HomeClient from '@/components/HomeClient';

export const revalidate = 3600; // revalidate every hour

async function getPages() {
  try {
    const pages = await runQuery('pages', [{ field: 'status', value: 'published' }]);
    pages.sort((a, b) => (a.h1 || '').localeCompare(b.h1 || ''));
    return pages;
  } catch (err) {
    console.error('Error loading pages:', err);
    return [];
  }
}

export default async function HomePage() {
  const pages = await getPages();
  return <HomeClient pages={pages} />;
}
