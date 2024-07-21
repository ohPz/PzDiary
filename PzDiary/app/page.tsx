import HnContainer from '@/container/hn';
import SeContainer from '@/container/se';
import SyContainter from '@/container/sy';
import YjContainer from '@/container/yj';
import YrContainer from '@/container/yr';
import { SessionProvider } from '@/lib/session';

export default function Home() {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <div className='flex flex-col h-1/2'>
        <div className='flex-1 bg-pink-200'>
          조영주
          <YjContainer />
        </div>
        <div className='flex-1 bg-yellow-200'>
          김하늘
          {/* <HnContainer /> */}
        </div>
        <div className='flex-1 bg-red-200'>
          임이랑
          {/* <YrContainer /> */}
        </div>
      </div>
      <div className='flex flex-row h-1/2'>
        <div className='flex-1 bg-green-200'>
          이승은
          <SeContainer />
        </div>
        <div className='flex-1 bg-blue-200'>
          곽소영
          <SessionProvider>
            <SyContainter />
          </SessionProvider>
        </div>
      </div>
    </div>
  );
}
