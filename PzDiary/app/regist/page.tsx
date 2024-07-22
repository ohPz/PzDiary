'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function RegistPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>

        <Link href='/'>Go back to Main</Link>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <>
      <h1>Register</h1>
      <button onClick={() => signIn('google')}>Sign up with Google</button>
    </>
  );
}
