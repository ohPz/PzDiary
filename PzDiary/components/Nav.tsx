import { SignOut } from '@/components/signout';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import UserAvatar from '@/components/user-avatar';
import { LogOut as LogOutIcon, User } from 'lucide-react';
import Link from 'next/link';

export default function Nav() {
  return (
    <>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
        <Link href='/' className='text-4xl'>
          PzDiary
        </Link>
        <Link href='/api/auth/signin'>
          Sign In (should put search bar later)
        </Link>
        <div className='w-15 h-15'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <UserAvatar></UserAvatar>
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
      </div>
    </>
  );
}
