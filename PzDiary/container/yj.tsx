import { SignIn } from '@/components/signin';
import { SignOut } from '@/components/signout';
import UserAvatar from '@/components/user-avatar';

export default function YjContainer() {
  return (
    <>
      <h1>yj</h1>
      <SignIn></SignIn>
      <SignOut></SignOut>
      <UserAvatar></UserAvatar>
    </>
  );
}
