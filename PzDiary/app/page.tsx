// import AuthProvider from '@/components/AuthProvider';
// import HnContainer from '@/container/hn';
import SeContainer from '@/container/se';
import { SessionProvider } from 'next-auth/react';

// import YjContainer from '@/container/yj';
// import YrContainer from '@/container/yr';
// import SyContainter from '@/container/sy';

export default function Home() {
  return (
    <div className='flex flex-col w-full h-fit'>
      {/* <div className='flex flex-col h-1/2'>
        <div className='flex-1 bg-pink-200'>
          조영주
          <YjContainer />
        </div>
        <div className='flex-1 bg-yellow-200'>
          김하늘
          <HnContainer />
        </div>
        <div className='flex-1 bg-red-200'>
          임이랑
          <YrContainer />
        </div>
      </div> */}
      <div className='flex flex-row h-full px-4 py-2 overflow-y-scroll'>
        <SessionProvider>
          <SeContainer />
        </SessionProvider>

        {/* <div className='flex-1 bg-green-200'>
          이승은
          <SeContainer />
        </div>
        <div className='flex-1 bg-blue-200'>
          곽소영
          <SessionProvider>
            <SyContainter />
          </SessionProvider>
        </div> */}
      </div>
    </div>
  );
}
