'use server';

import { SignOut } from '@/components/signout';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import UserAvatar from '@/components/user-avatar';
import HnContainer from '@/container/hn';
import { LogOut as LogOutIcon, User } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export default async function Nav() {
  const session = await auth();
  if (!session || !session.user) redirect('/api/auth/signin');
  return (
    <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
      <Link href='/'>
        <p className='text-xl'>PzDiary</p>
      </Link>
      <HnContainer />
      <div className='rounded-full'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <UserAvatar imageUrl={session?.user?.image || ''} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuItem className='justify-center'>
              <User className='mr-2 h-4 w-4' />
              <Link href='/my'>My Page</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='justify-center'>
              <LogOutIcon className='mr-2 h-4 w-4' />

              <SignOut />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
