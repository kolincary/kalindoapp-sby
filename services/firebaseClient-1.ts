import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-17aX7l1KnJt8qYmsjMapneLsWV28Rk8",
  authDomain: "gudang-surabaya.firebaseapp.com",
  projectId: "gudang-surabaya",
  storageBucket: "gudang-surabaya.firebasestorage.app",
  messagingSenderId: "438972524345",
  appId: "1:438972524345:web:71586c71ce3268fed8aae8"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the specific database 'ksapp-sby'
export const db = getFirestore(app, "ksapp-sby");
