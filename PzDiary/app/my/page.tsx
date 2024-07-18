/* eslint-disable @next/next/no-img-element */
import LabelInput from '@/components/LableInput';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { auth, signOut } from '@/lib/auth';

export default async function MyPage() {
  const session = await auth();
  console.log('🚀  session:', session);
  if (!session || !session.user) return redirect('/api/auth/signin');

  const {
    user: { name, email, image },
  } = session;

  const logout = async () => {
    'use server';
    await signOut();
  };

  return (
    <div className='flex flex-col mx-auto max-w-md'>
      <h1 className='text-3xl text-green-500 my-10'>My Profile</h1>
      <div className='flex gap-5'>
        <img
          src={image || ''}
          alt={name || ''}
          width={100}
          height={100}
          className='rounded-full hover:opacity-50 m-auto'
        />
        <form action={logout}>
          <LabelInput label='Nickname' value={name || ''} />
          <LabelInput label='Email' value={email || ''} />
          <Button variant='ghost'>SignOut</Button>
        </form>
      </div>
      {/* <hr className='mt-10' />
      <pre className='text-sm text-slate-400'>
        {JSON.stringify(session, null, '  ')}
      </pre> */}
    </div>
  );
}
