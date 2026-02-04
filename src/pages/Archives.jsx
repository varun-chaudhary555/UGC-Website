import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


function Archives() {
  return (
    <div>
        <p className="text-[#ff6c3a] text-3xl -mt-14! ml-104 font-bold">Archives</p>
        <div className='flex'>
                <div className='flex mt-4 ml-8'>
                  <p className='text-sm'>show</p>
                  <p className='flex ml-1 text-sm border-[0.9px] rounded px-1! h-6'>5 <MdKeyboardArrowDown className='mt-1' /></p>
                  <p className='text-sm ml-1'>entries</p>
                  <p className=' ml-130 flex'>Search: <p className='ml-1 border h-6  w-40'></p></p>
        
                </div>
              </div>
        <table className=' ml-8 border -mt-6! mb-12 border-gray-400'>
          <thead className='border-b-2!'>
            <tr>
              <th className='border-r! text-white bg-orange-500 pl-4! pr-10 py-2 w-62'>Sr.No.</th>
              {/* <th className='border-r! text-white bg-orange-500 pl-4! pr-16 pt-4'>Tender Code</th> */}
              <th className='border-r! text-white bg-orange-500 pl-4! pr-10 py-2 w-98'>Archived Regulations</th>
              <th className='border-r! text-white bg-orange-500 px-4! w-52'></th>
              {/* <th className='px-4! text-white bg-orange-500 pr-10!'>Last <br /> Date</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2!'>
  <td className='border-r-2! pl-2! pt-2 pb-8! align-top'>1</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>
    UGC (Disqualification, retirement & Conditions of Service of Members) Rules, 1956 (dated: 01.11.1956)
    <p className='text-orange-500'>Published on 01/11/1956</p>
  </td>
  <td className='pl-3! pt-2 border-r-2! align-top'>View</td>
</tr>

<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! pt-2 pb-8! align-top'>2</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>
    UGC (Terms and Conditions of Service of Employees) Rules.1958 (dated: 01.07.1958)
    <p className='text-orange-500'>Published on 01/07/1958</p>
  </td>
  <td className='pl-3! pt-2 border-r-2! align-top'>View</td>
</tr>

<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! pt-2 pb-8! align-top'>3</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>
    UGC (Supplementary Terms & Conditions of Service of Employees) Regulations, 1967
    <p className='text-orange-500'>Published on</p>
  </td>
  <td className='pl-3! pt-2 border-r-2! align-top'>View</td>
</tr>

<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! pt-2 pb-8! align-top'>4</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>
    UGC (Conduct ) Regulations, 1967
    <p className='text-orange-500'>Published on</p>
  </td>
  <td className='pl-3! pt-2 border-r-2! align-top'>View</td>
</tr>

<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! pt-2 pb-8! align-top'>5</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>
    UGC (Terms and Conditions of Service of Employees) Rlules, 1983 (dated: 19.05.1983)
    <p className='text-orange-500'>Published on 19/05/1983</p>
  </td>
  <td className='pl-3! pt-2 border-r-2! align-top'>View</td>
</tr>


          </tbody>
        </table>
      <div className='flex mb-20'>
        <p className='ml-10 -mt-6! text-sm!'>Showing 1 to 5 of 45 entries</p>
        <p className='ml-68 -mt-6! '>previous</p>
        <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p>
        <p className='ml-6 -mt-5! text-sm! '>...</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>9</p>
        <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
      </div>
    </div>
  )
}

export default Archives