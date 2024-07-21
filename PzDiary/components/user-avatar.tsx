import { auth } from '@/lib/auth';

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <img
        src={session.user.image || ''}
        alt={session.user.name || ''}
        className='rounded-full w-15 h-15'
      />
    </div>
  );
}
