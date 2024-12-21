// "use client";
// import React, { useState } from 'react';
// import {  FaXTwitter } from 'react-icons/fa';
// import {signIn} from "next-auth/react"
// import { LuLoader } from "react-icons/lu";

// const TwitterSignin = () => {
//     const [processing, setProcessing] = useState(false)

//     const handleSignin = ()=>{
//         signIn("twitter", {callbackUrl:"/post-product"})
//         setProcessing(true)
//     }

//   return (
//     <main>
       
//             <button
//                         className="w-full py-3 px-6 bg-blue-400 text-white rounded-md flex items-center justify-center space-x-3 hover:bg-blue-500 transition-all"
//                         onClick={handleSignin}
//             disabled={processing}
//                 >
//             <span className='flex items-center justify-center space-x-3'>
//                     {
//                      processing ? < LuLoader className='text-2xl animate-spin text-white' /> : (
//                          <div className='flex items-center justify-center space-x-3'>
//                           <FaXTwitter className="text-2xl" />
//                           <span>Sign in with Twitter</span>
 
//                          </div>
//                      )
//                  }
//                 </span>
//                         <FaXTwitter className="text-2xl"/>
//                         <span>Sign in with Twitter</span>
//                     </button>
//     </main>
//   )
// }

// export default TwitterSignin