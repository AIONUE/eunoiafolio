/// <reference types="vite/client" />
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// We use a dynamic approach to avoid build errors if the local config is missing
// while still allowing the app to work in AI Studio without manual Secret setup.
let localConfig: any = {};
try {
  // In AI Studio, this file exists locally but is ignored by git
  // @ts-ignore
  const config = await import('../../firebase-applet-config.json');
  localConfig = config.default || config;
} catch (e) {
  // Fallback to empty if file is missing (e.g. in production/CI)
  console.warn("Local firebase-applet-config.json not found, relying on environment variables.");
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || localConfig.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || localConfig.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || localConfig.projectId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || localConfig.appId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || localConfig.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || localConfig.messagingSenderId,
};

const firestoreDatabaseId = import.meta.env.VITE_FIREBASE_FIRESTORE_DATABASE_ID || localConfig.firestoreDatabaseId || '(default)';

// Validate API Key to prevent Firebase initialization errors
if (!firebaseConfig.apiKey) {
  console.error("Firebase API Key is missing. Please set VITE_FIREBASE_API_KEY in Secrets or ensure firebase-applet-config.json exists.");
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firestoreDatabaseId);
export const auth = getAuth(app);
