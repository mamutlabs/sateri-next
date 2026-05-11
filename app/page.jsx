import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import HomeClient from '@/components/HomeClient';

export const revalidate = 3600; // revalidate every hour

async function getPages() {
  try {
    const q = query(collection(db, 'pages'), where('status', '==', 'published'));
    const snapshot = await getDocs(q);
    const pages = snapshot.docs.map(d => d.data());
    pages.sort((a, b) => a.h1.localeCompare(b.h1));
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
