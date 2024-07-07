export default function Input() {
  return (
    <>
      <label className="text-gray-500 font-bold">내용: </label>
      <input
        name="content"
        placeholder="내용을 입력해 주세요"
        size="85"
        className="p-3 m-3 
      text-gray-900 border 
      border-gray-300 
      rounded-lg bg-gray-50 
      text-base 
        focus:ring-gray-500"
      />
    </>
  );
}

// import { forwardRef, useId } from "react";

// const Input = forwardRef(({ label, type = "text", placeholder = "" }, ref) => {
//   const id = useId();

//   <label
//     htmlFor={id}
//     className="text-gray-500 font-bold"
//   >
//     {label}
//   </label>
// <div className="mt-2x">
//   <input
//     type={type}
//     id={id}
//     ref={ref}
//     placeholder={placeholder}
//     className="p-3 m-3
// text-gray-900 border
// border-gray-300
// rounded-lg bg-gray-50
// text-base
//   focus:ring-gray-500"
//   />
// </div>

// Input.displayName = "Input";
// export default Input;

//   return (
//     <>
//       {label && (
//         <label
//           htmlFor={id}
//           className="block text-sm font-medium leading-6 text-gray-900"
//         >
//           {label}
//         </label>
//       )}
//       <div className="mt-2x">
//         <input
//           type={type}
//           id={id}
//           ref={ref}
//           placeholder={`${label || placeholder}...`}
//           className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         />
//       </div>
//     </>
//   );
// });

// Input.displayName = "Input";
// export default Input;
