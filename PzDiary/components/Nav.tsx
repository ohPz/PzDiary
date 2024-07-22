/* eslint-disable @next/next/no-img-element */
import { SignOut } from '@/components/signout';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import UserAvatar from '@/components/user-avatar';
import { BookMarkedIcon } from 'lucide-react';
import { LogOut as LogOutIcon, User } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/lib/auth';

export default async function Nav() {
  const session = await auth();
  // console.log('🚀  session:', session);

  let name;
  let image;
  let email;

  if (session && session.user) {
    name = session.user.name;
    image = session.user.image;
    email = encodeURI(session.user.email || '');
  }

  return (
    <nav className='flex justify-between '>
      <div className='container mx-auto px-4 py-2 flex justify-between items-center bg-slate-800 shadow'>
        <Link href='/' className='text-4xl text-white'>
          PzDiary
        </Link>
        {name ? (
          <div>
            <UserAvatar />
          </div>
        ) : (
          <div className='text-white'>
            <Link href='/regist'>
              <Button variant='link' className='text-white'>
                SignUp
              </Button>
            </Link>
            |
            <Link href='/api/auth/signin'>
              <Button variant='link' className='text-white'>
                SignIn
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

//   const session = await auth();

//   // 세션이 없으면 Nav 에 로고만 출력 (테스트용)
//   if (!session?.user)
//     return (
//       <div className='container mx-auto px-4 py-2 flex justify-between items-center bg-slate-800 shadow'>
//         <Link href='/' className='text-4xl text-white'>
//           PzDiary
//         </Link>
//         <Link href='/api/auth/signin' className=' text-white'>
//           Sign In (테스트용)
//         </Link>
//       </div>
//     );

//   // 세션이 있으면 아래를 출력
//   return (
//     <>
//       <div className='container mx-auto px-4 py-2 flex justify-between items-center bg-slate-800 shadow'>
//         <Link href='/' className='text-4xl text-white'>
//           PzDiary
//         </Link>
//         <Link href='/api/auth/signin' className=' text-white'>
//           Sign In (should put search bar later)
//         </Link>
//         <div className='w-15 h-15 '>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <button>
//                 <UserAvatar></UserAvatar>
//               </button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className='w-56'>
//               <DropdownMenuItem>
//                 <User className='mr-2 h-4 w-4' />
//                 <Link href='/my'>My Page</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <LogOutIcon className='mr-2 h-4 w-4' />
//                 <button>
//                   <SignOut />
//                 </button>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </>
//   );
// }
