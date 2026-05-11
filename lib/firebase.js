import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAic95eomLlV9lZ84gZaGK68ov0mu4W1WM",
  authDomain: "hacpen-ai-industrial.firebaseapp.com",
  projectId: "hacpen-ai-industrial",
  storageBucket: "hacpen-ai-industrial.firebasestorage.app",
  messagingSenderId: "150791249594",
  appId: "1:150791249594:web:dc0ca3629b524cea772c83"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app, 'ai-studio-8d8b5450-7cfb-4bdf-953f-a488ca9f3c8e');
