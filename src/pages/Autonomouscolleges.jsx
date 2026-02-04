import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


function Autonomouscolleges() {
 return (
         <div>
             <div className='relative'>
                 <img src="/photos/ugc_background.png" className='h-36 w-full' alt="" />
 
                 <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Autonomous Colleges</button>
                 {/* <h2 className='absolute top-14 left-18 text-white'>International Cooperation</h2> */}
                 <h5 className='absolute top-16 left-18 text-white'>University Grants Commission</h5>
             </div>
             <h2 className='ml-20 text-orange-500! mt-10!'>Autonomous Colleges</h2>
             <div className='flex'>
                 <div className='flex  ml-20'>
                     <p className='text-sm'>show</p>
                     <p className='flex ml-1 text-sm border-[0.9px] rounded px-1! h-6'>10 <MdKeyboardArrowDown className='mt-1' /></p>
                     <p className='text-sm ml-1'>entries</p>
                     <p className=' ml-190 flex'>Search: <p className='ml-1 border h-6  w-40'></p></p>
 
                 </div>
             </div>
             <div>
                 <table className=' ml-20 border -mt-6! mb-12 border-gray-400'>
                     <thead className='border-b-2!'>
                         <tr>
                             <th className='border-r! text-white bg-orange-500 pl-4! pr-10 py-2'>Sr <br /> No</th>
                             <th className='border-r! text-white bg-orange-500 px-4! pt-4 pr-1! whitespace-nowrap'>Title</th>
                             <th className='border-r! text-white bg-orange-500 px-4! pr-10!'>View</th>
                         </tr>
                     </thead>
                     <tbody>
                        <tr className='border-b-2!'>
    <td className='border-r-2! pl-2! -mt-4! pb-8!'>1</td>
    <td className='pl-4 align-top pt-2 border-r-2! w-230'>List of Autonomous Colleges</td>
    <td className='pl-3! border-r-2! pb-4'>View</td>
</tr>

<tr className='border-b-2!'>
    <td className='border-r-2! pl-2! -mt-4! pb-8!'>2</td>
    <td className='pl-4 align-top pt-2 border-r-2! w-230'>Autonomous portal</td>
    <td className='pl-3! border-r-2! pb-4'>View</td>
</tr>

<tr className='border-b-2!'>
    <td className='border-r-2! pl-2! -mt-4! pb-8!'>3</td>
    <td className='pl-4 align-top pt-2 border-r-2! w-230'>
        UGC letter regarding: UGC (Conferment of Autonomous Status upon Colleges and Measures for Maintenance of Standards in Autonomous Colleges) Regulations, 2023
    </td>
    <td className='pl-3! border-r-2! pb-4'>View</td>
</tr>

<tr className='border-b-2!'>
    <td className='border-r-2! pl-2! -mt-4! pb-8!'>4</td>
    <td className='pl-4 align-top pt-2 border-r-2! w-230'>
        UGC (Conferment of Autonomous Status upon Colleges and Measures for Maintenance of Standards in Autonomous Colleges) Regulations, 2023
    </td>
    <td className='pl-3! border-r-2! pb-4'>View</td>
</tr>

<tr className='border-b-2!'>
    <td className='border-r-2! pl-2! -mt-4! pb-8!'>5</td>
    <td className='pl-4 align-top pt-2 border-r-2! w-230'>Autonomous College Scheme Document</td>
    <td className='pl-3! border-r-2! pb-4'>View</td>
</tr>

<tr className='border-b-2!'>
    <td className='border-r-2! pl-2! -mt-4! pb-8!'>6</td>
    <td className='pl-4 align-top pt-2 border-r-2! w-230'>Letter regarding UGC Regulations on Autonomous Colleges</td>
    <td className='pl-3! border-r-2! pb-4'>View</td>
</tr>

<tr className='border-b-2!'>
    <td className='border-r-2! pl-2! -mt-4! pb-8!'>7</td>
    <td className='pl-4 align-top pt-2 border-r-2! w-230'>
        University Grants Commission (Conferment of Autonomous Status upon Colleges and Measures for Maintenance of Standards in Autonomous Colleges) Regulations, 2018
    </td>
    <td className='pl-3! border-r-2! pb-4'>View</td>
</tr>

                     </tbody>
                 </table>
             </div>
             <div className='flex'>
                 <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 7 of 7 entries</p>
                 <p className='ml-180 -mt-6! '>previous</p>
                 <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
                 {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p> */}
                 {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p> */}
                 {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p> */}
                 {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p> */}
                 {/* <p className='ml-6 -mt-5! text-sm! '>...</p> */}
                 {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>36</p> */}
                 <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
             </div>
         </div>
     )
}

export default Autonomouscolleges