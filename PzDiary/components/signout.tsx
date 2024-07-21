'use server';

import { signOut } from '@/lib/auth';

export async function SignOut() {
  return (
    <form
      className='col-span-4'
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/api/auth/signin', redirect: true });
      }}
    >
      <button type='submit'>Sign Out</button>
    </form>
  );
}
