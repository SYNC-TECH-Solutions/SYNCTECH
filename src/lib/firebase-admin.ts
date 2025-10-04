
import * as admin from 'firebase-admin';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  ? JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, 'base64').toString('utf-8'))
  : undefined;

let adminApp: admin.app.App | undefined = undefined;

export function getFirebaseAdminApp() {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  if (serviceAccount) {
    try {
       return admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    } catch (error) {
        console.error("Error initializing Firebase Admin SDK:", error);
        return undefined;
    }
  }
  
  if (process.env.NODE_ENV !== 'development') {
    console.warn('Firebase Admin SDK service account credentials not found. Certain backend features might be disabled.');
  }
  
  return undefined;
}
