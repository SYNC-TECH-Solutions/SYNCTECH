
import * as admin from 'firebase-admin';

// This file is kept for legacy purposes but should not be used for new development.
// The @genkit-ai/firebase/admin package provides a pre-initialized admin instance.

/**
 * @deprecated Use the admin export from '@genkit-ai/firebase/admin' instead.
 * This function is no longer the recommended way to get the Firebase Admin App instance.
 */
export function getFirebaseAdminApp() {
  if (admin.apps.length > 0) {
    return admin.app();
  }
  
  console.warn('getFirebaseAdminApp is deprecated and should not be used. It may not be properly initialized.');
  
  return undefined;
}
