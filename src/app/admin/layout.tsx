
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionCookie = cookies().get('__session')?.value;

  if (!sessionCookie) {
    redirect('/login');
  }

  try {
    const session = JSON.parse(sessionCookie);
    if (!session.isLoggedIn || session.expires < Date.now()) {
      cookies().set('__session', '', { expires: new Date(0), path: '/' });
      redirect('/login');
    }
  } catch (error) {
    console.error('Invalid session cookie:', error);
    cookies().set('__session', '', { expires: new Date(0), path: '/' });
    redirect('/login');
  }


  return <>{children}</>;
}
