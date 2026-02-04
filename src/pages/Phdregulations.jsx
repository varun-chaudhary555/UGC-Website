import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


function Phdregulations() {
  return (
          <div>
              <h2 className='text-orange-500! text-center ml-30 font-bold! -mt-40!'>List of HEIs not Following Ph.D <br /> Regulations</h2>
              <div className='flex ml-20 mt-6'>
                  <div className='flex'>
                      <p className='text-sm'>show</p>
                      <p className='flex ml-1 text-sm border-[0.9px] rounded px-1! h-6'>10 <MdKeyboardArrowDown className='mt-1' /></p>
                      <p className='text-sm ml-1'>entries</p>
                      <p className=' ml-110 flex'>Search: <p className='ml-1 border h-6 w-40'></p></p>
                  </div>
              </div>
              <table className=' ml-20 border -mt-4! mb-10 border-gray-400'>
                  <thead className='border-b-2!'>
                      <tr>
                          <th className=' text-white bg-orange-500 pl-4! pr-10 py-2'>Sr.No.</th>
                          <th className=' text-white bg-orange-500 pl-4! pr-10 py-2 w-20'>State</th>
                          <th className='text-white bg-orange-500 pl-4! pr-10 py-3 w-48!'>University Name</th>
                          <th className='text-white bg-orange-500 pl-4! pr-10 py-3'>University Type</th>
                          <th className='text-white bg-orange-500 pl-4! pr-10 py-3 w-56!'>University Address</th>
                      </tr>
                  </thead>
                  <tbody>
                     <tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-16!'>1</td>
    <td className='pl-4! pt-2! pb-16!'>Rajasthan</td>
    <td className='pl-4! pt-2! pb-16!'>OPJS University</td>
    <td className='pl-4! pt-2! pb-16!'>Private University</td>
    <td className='pl-4 align-top pt-2!'>
        Rawatsar Kunjla, Near Sankhu Fort, Rajgarh (Sadulpur), Jhunjunu Road, Churu, Rajasthan -331303
    </td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-16!'>2</td>
    <td className='pl-4! pt-2! pb-16!'>Rajasthan</td>
    <td className='pl-4! pt-2! pb-16!'>Sunrise University</td>
    <td className='pl-4! pt-2! pb-16!'>Private University</td>
    <td className='pl-4 align-top pt-2!'>
        Bagad Rajput Tech. Ramgarh, Alwar Rajasthan
    </td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-16!'>3</td>
    <td className='pl-4! pt-2! pb-16!'>Rajasthan</td>
    <td className='pl-4! pt-2! pb-16!'>Singhania University</td>
    <td className='pl-4! pt-2! pb-16!'>Private University</td>
    <td className='pl-4 align-top pt-2!'>
        Pacheri Bari District Jhunjhunu, Rajasthan-333515
    </td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-16!'>4</td>
    <td className='pl-4! pt-2! pb-16!'>Rajasthan</td>
    <td className='pl-4! pt-2! pb-16!'>Shri Jagdish Prasad Jhabarmal Tibrewala University (JJTU)</td>
    <td className='pl-4! pt-2! pb-16!'>Private University</td>
    <td className='pl-4 align-top pt-2!'>
        Vidyanagri, Jhunjhunu Bisau Road, Chudela, District - Jhunjhunu, Rajasthan -333001
    </td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-16!'>5</td>
    <td className='pl-4! pt-2! pb-16!'>Uttar Pradesh</td>
    <td className='pl-4! pt-2! pb-16!'>Monad University</td>
    <td className='pl-4! pt-2! pb-16!'>Private University</td>
    <td className='pl-4 align-top pt-2!'>
        Kasmabad, Dist. Hapur, Uttar Pradesh-245101
    </td>
</tr>

                  </tbody>
              </table>
              <div className='flex'>
                  <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 5 of 5 entries</p>
                  <p className='ml-80 -mt-6! '>previous</p>
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

export default Phdregulations