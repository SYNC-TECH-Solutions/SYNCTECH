
import * as admin from 'firebase-admin';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  : undefined;

let adminApp: admin.app.App | undefined = undefined;

export function getFirebaseAdminApp() {
  if (!admin.apps.length) {
    if (serviceAccount) {
        adminApp = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    } else {
        console.warn('Firebase Admin SDK service account credentials not found. Firebase Admin features will be disabled.');
    }
  } else {
    adminApp = admin.app();
  }
  return adminApp;
}
