import { SignOut } from '@/components/signout';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOutIcon, User } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/lib/auth';

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <img
              src={session.user.image || ''}
              alt={session.user.name || ''}
              width={50}
              height={50}
              className='hover:opacity-50 rounded-full'
            />{' '}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuItem>
            <User className='mr-2 h-4 w-4' />
            <Link href='/my'>My Page</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOutIcon className='mr-2 h-4 w-4' />
            <button>
              <SignOut />
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
