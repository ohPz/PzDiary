'use server';

import LabelInput from '@/components/LableInput';
import { SignOut } from '@/components/signout';
import UserAvatar from '@/components/user-avatar';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export default async function MyPage() {
  const session = await auth();
  if (!session || !session.user) return redirect('/api/auth/signin');

  const {
    user: { name, email },
  } = session;

  return (
    <div className='flex flex-col mx-auto max-w-md'>
      <h1 className='text-3xl text-green-500 my-10'>My Profile</h1>
      <div className='flex gap-5'>
        <UserAvatar isMyPage={true} />
        <div>
          <LabelInput label='Nickname' value={name || ''} />
          <LabelInput label='Email' value={email || ''} />
          <SignOut />
        </div>
      </div>
    </div>
  );
}
