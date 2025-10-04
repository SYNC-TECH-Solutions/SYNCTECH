
import * as admin from 'firebase-admin';

// This file provides a utility function to get the Firebase Admin App instance.
// It ensures that the app is initialized only once.

export function getFirebaseAdminApp() {
  if (admin.apps.length > 0) {
    return admin.apps[0]!;
  }

  // If the service account key is stored in an environment variable,
  // Firebase Admin SDK can automatically parse it.
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
      try {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
        return admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
      } catch (e) {
         console.error("Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY. Make sure it's a valid JSON string.", e);
         throw new Error("Firebase Admin SDK initialization failed due to invalid service account key.");
      }
  }

  // Fallback for other environments (like local dev with a file path)
  // or if automatic initialization is preferred.
  try {
    return admin.initializeApp();
  } catch (e) {
    console.error("Failed to initialize Firebase Admin SDK automatically.", e);
    throw new Error("Firebase Admin SDK initialization failed.");
  }
}
