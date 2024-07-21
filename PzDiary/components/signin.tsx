'use server';

import { signIn } from '@/lib/auth';

export async function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google', {
          redirect: true,
          callbackUrl: '/',
        });
      }}
    >
      <button type='submit'>Signin with Google</button>
    </form>
  );
}
