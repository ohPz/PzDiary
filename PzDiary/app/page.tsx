import HnContainer from '@/container/hn';
import SeContainer from '@/container/se';
import SyContainter from '@/container/sy';
import YjContainer from '@/container/yj';
import YrContainer from '@/container/yr';
import { SessionProvider } from '@/lib/session';

export default function Home() {
  return (
    <>
      <div className='flex flex-col w-full h-screen'>
        <div className='flex flex-row h-1/2'>
          <div className='flex-1 bg-green-200'>
            이승은
            <SeContainer />
          </div>
        </div>
      </div>
    </>
  );
}
