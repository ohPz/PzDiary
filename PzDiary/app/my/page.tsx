'use server';

import LabelInput from '@/components/LableInput';
import { SignOut } from '@/components/signout';
import UserAvatar from '@/components/user-avatar';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export default async function MyPage() {
  // session: {
  //   user: {
  //     name: 'SEUNGEUN YI',
  //     email: 'sherrygelato.lab@gmail.com',
  //     image: 'https://lh3.googleusercontent.com/a/ACg8ocLjOsIKXLLw6yzcdSt2MuZKYIuL0-rYLrFz1dp9sdEwpOH6T3I=s96-c',
  //     id: 1
  //   },
  //   expires: '2024-08-20T00:13:49.833Z'
  // }
  // const router = useRouter();
  // const { data: session, update } = useSession();
  // if (!session || !session.user) return router.push('/api/auth/signin');

  // const {
  //   user: { name, email, image },
  // } = session;

  const session = await auth();
  console.log('🚀  session:', session);
  if (!session || !session.user) return redirect('/api/auth/signin');

  const {
    user: { name, email, image },
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
