'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
// import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function RegistPage() {
  const { data: session } = useSession();

  if (session) {
    return redirect('/my');
  }
  return (
    <div className='flex flex-col items-center'>
      <h1>Register</h1>
      <h1>
        <button onClick={() => signIn('google')}>Sign up with Google</button>
      </h1>
    </div>
  );
}
