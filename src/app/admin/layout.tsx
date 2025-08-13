
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getAuth } from 'firebase-admin/auth';
import { getFirebaseAdminApp } from '@/lib/firebase-admin';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionCookie = cookies().get('__session')?.value || '';

  if (!sessionCookie) {
    redirect('/login');
  }

  try {
    getFirebaseAdminApp();
    await getAuth().verifySessionCookie(sessionCookie, true);
  } catch (error) {
    console.error('Session cookie verification failed:', error);
    redirect('/login');
  }

  return <>{children}</>;
}
