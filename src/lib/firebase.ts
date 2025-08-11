
'use client';

import { initializeApp, getApp, getApps } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  projectId: "sync-tech-solutions",
  appId: "1:139765189784:web:2fefbd7382a1d0792654ed",
  storageBucket: "sync-tech-solutions.firebasestorage.app",
  apiKey: "AIzaSyAuSiS5_OXzXf7xnefG1beF598ctA6X3Y4",
  authDomain: "sync-tech-solutions.firebaseapp.com",
  messagingSenderId: "139765189784",
};

function initializeFirebase() {
  if (typeof window !== 'undefined') {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

    if (process.env.NODE_ENV !== 'development') {
        const appCheck = initializeAppCheck(app, {
            provider: new ReCaptchaV3Provider('6Ld-8wsqAAAAAIH9-2yL0_9c5j_Y8f7q_8Kx-3gO'), // Replace with your reCAPTCHA v3 site key
            isTokenAutoRefreshEnabled: true,
        });
    }

    return app;
  }
  return null;
}

export const firebaseApp = initializeFirebase();
