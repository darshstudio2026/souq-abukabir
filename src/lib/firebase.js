// Firebase initialization for سوق أبوكبير
// Real values come from environment variables — see .env.example.
// If they are missing (e.g. first run before .env is filled in), we fall
// back to harmless placeholder values instead of letting Firebase throw at
// import time — a real config error there would crash the entire app before
// React ever renders. Screens that need real auth/data must check
// `isFirebaseConfigured` before using auth/db/storage.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const envConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(envConfig.apiKey && envConfig.projectId);

const placeholderConfig = {
  apiKey: "demo-api-key-placeholder",
  authDomain: "demo.firebaseapp.com",
  projectId: "demo-project",
  storageBucket: "demo-project.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000",
};

const firebaseConfig = isFirebaseConfigured ? envConfig : placeholderConfig;

if (!isFirebaseConfigured && import.meta.env.DEV) {
  console.warn(
    "[سوق أبوكبير] متغيرات Firebase مش موجودة في .env — بيتم استخدام إعدادات وهمية عشان الواجهة تشتغل. اضبط .env عشان تسجيل الدخول/البيانات تشتغل فعليًا."
  );
}

// Avoid re-initializing during Vite HMR
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Fixed city scope for the MVP. Every listing/document carries this so the
// data model can expand to more cities later without a schema rewrite.
export const CITY_ID = "abu-kabir";

export default app;
