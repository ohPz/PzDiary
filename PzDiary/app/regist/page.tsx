'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function RegistPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <h1>Register</h1>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </>
  );
}
