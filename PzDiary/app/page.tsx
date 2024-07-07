'use client';

// import Dropdown from '@/components/dropdown';
// import Calendar from '@/components/calendar';
import { InputWithLabel } from '@/components/inputWithLabel';
import Card from '../components/card';

export default function Home() {
  return (
    <main className='flex flex-col h-screen'>
      <div className='flex flex-row flex-none h-2/5 w-screen'>
        <div className='flex flex-col w-4/6 p-4 my-2 mx-5'>
          <InputWithLabel />
        </div>
      </div>
      <div className='flex flex-row flex-none h-3/5'>
        <div className='flex-1 bg-red-500 p-4'>아래1</div>
        <div className='flex-1 bg-green-500 p-4'>아래2</div>
        <div className='flex-1 bg-blue-500 p-4'>아래3</div>
      </div>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className='flex flex-col h-screen'>
//       <div className='flex flex-row flex-none h-2/5 w-screen'>
//         <div className='flex flex-col w-4/6 p-4 my-2 mx-5'>
//           <div className='flex flex-row flex-none w-full h-1/6 mb-3'>
//             {/* <Dropdown /> */}
//             <Label htmlFor='email'>드럽다운</Label>
//             <Input type='email' id='email' placeholder='드럽다운' />
//           </div>
//           <div className='flex flex-row flex-none w-full h-1/6 mb-3'>
//             <Label htmlFor='email'>제목</Label>
//             <Input type='email' id='email' placeholder='제목을 입력해주세요' />
//           </div>
//           <div className='flex flex-row flex-none w-full h-3/6'>
//             <Label htmlFor='email'>내용</Label>
//             <Input type='email' id='email' placeholder='내용을 입력해주세요' />
//           </div>
//         </div>
//         <div className='flex flex-row flex-none w-2/6'>
//           {/* <Calendar /> */}
//         </div>
//       </div>
//       <div className='flex flex-row flex-none h-3/5'>
//         <div className='flex-1 bg-red-500 p-4'>{/* <Card /> */}</div>
//         <div className='flex-1 bg-green-500 p-4'>아래2</div>
//         <div className='flex-1 bg-blue-500 p-4'>아래3</div>
//       </div>
//     </main>
//   );
// }
