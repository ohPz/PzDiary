'use server';

import Image from 'next/image';
import { auth } from '@/lib/auth';
import { SignIn } from './signin';

export default async function UserAvatar({
  isMyPage = false,
}: {
  isMyPage?: boolean;
}) {
  const session = await auth();
  if (!session?.user) return null;
  return (
    <div>
      {!session?.user ? (
        <SignIn />
      ) : (
        <Image
          src={session?.user.image || ''}
          alt='User Avatar'
          width={isMyPage ? 100 : 45}
          height={isMyPage ? 100 : 45}
          className='rounded-full hover:opacity-50 m-auto'
          priority={true}
        />
      )}
    </div>
  );
}
