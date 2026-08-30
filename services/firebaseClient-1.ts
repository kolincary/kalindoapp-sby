import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const ACTIVE_FIREBASE_CONFIG = {
  apiKey: "AIzaSyB-17aX7l1KnJt8qYmsjMapneLsWV28Rk8",
  authDomain: "gudang-surabaya.firebaseapp.com",
  projectId: "gudang-surabaya",
  storageBucket: "gudang-surabaya.firebasestorage.app",
  messagingSenderId: "438972524345",
  appId: "1:438972524345:web:71586c71ce3268fed8aae8"
};

// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || ACTIVE_FIREBASE_CONFIG.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || ACTIVE_FIREBASE_CONFIG.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || ACTIVE_FIREBASE_CONFIG.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || ACTIVE_FIREBASE_CONFIG.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || ACTIVE_FIREBASE_CONFIG.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ACTIVE_FIREBASE_CONFIG.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the specific database 'ksapp-sby'
const databaseId = import.meta.env.VITE_FIREBASE_DATABASE_ID || "ksapp-sby";
export const db = getFirestore(app, databaseId);
