import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


function Ombudspersons() {
  return (
            <div>
                <h2 className='text-orange-500! text-center ml-30 font-bold! -mt-40!'>List of HEIs not appointed <br /> Ombudsperson</h2>
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
                            <th className='text-white bg-orange-500 pl-4! pr-10 py-3 w-42!'>University Type</th>
                            <th className='text-white bg-orange-500 pl-4! pr-10 py-3 w-56!'>University Address</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-8!'>1</td>
    <td className='pl-4! pt-2! pb-8!'>Andaman</td>
    <td className='pl-4! pt-2! pb-8!'>Netaji Subhash Chandra Bose Institute of Higher Learning</td>
    <td className='pl-4! pt-2! pb-8!'>Deemed to be University</td>
    <td className='pl-4 align-top pt-2!'>Port Blair</td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-8!'>2</td>
    <td className='pl-4! pt-2! pb-8!'>Assam</td>
    <td className='pl-4! pt-2! pb-8!'>Sibsagar University</td>
    <td className='pl-4! pt-2! pb-8!'>State University</td>
    <td className='pl-4 align-top pt-2!'>P.O. Joyasagar, Dist: Sivasagar</td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-8!'>3</td>
    <td className='pl-4! pt-2! pb-8!'>Bihar</td>
    <td className='pl-4! pt-2! pb-8!'>Bihar Sports University</td>
    <td className='pl-4! pt-2! pb-8!'>State University</td>
    <td className='pl-4 align-top pt-2!'>Nalanda</td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-8!'>4</td>
    <td className='pl-4! pt-2! pb-8!'>Delhi</td>
    <td className='pl-4! pt-2! pb-8!'>Morarji Desai National Institute of Yoga</td>
    <td className='pl-4! pt-2! pb-8!'>Deemed to be University</td>
    <td className='pl-4 align-top pt-2!'>68, Ashok Road, New Delhi-110016</td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-8!'>5</td>
    <td className='pl-4! pt-2! pb-8!'>Delhi</td>
    <td className='pl-4! pt-2! pb-8!'>Delhi Sports University</td>
    <td className='pl-4! pt-2! pb-8!'>State University</td>
    <td className='pl-4 align-top pt-2!'>Ludlow Castle Sports Complex, Shamnath Marg, Delhi</td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-8!'>6</td>
    <td className='pl-4! pt-2! pb-8!'>Gujarat</td>
    <td className='pl-4! pt-2! pb-8!'>Swarnim Gujarat Sports University</td>
    <td className='pl-4! pt-2! pb-8!'>State University</td>
    <td className='pl-4 align-top pt-2!'>Commerce College Campus, Opp Youth Hostel, Sector 15, Gandhinagar, Gujarat PTC, Building Campus, Gandhinagar</td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-8!'>7</td>
    <td className='pl-4! pt-2! pb-8!'>Karnataka</td>
    <td className='pl-4! pt-2! pb-8!'>KSGH Music and Performing Arts University</td>
    <td className='pl-4! pt-2! pb-8!'>State University</td>
    <td className='pl-4 align-top pt-2!'>JLB Road, Ashoka Circle, Lakshmipura, Mysuru-04 Near Ashoka Circle, Lakshmipuram, Mysore</td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-8!'>8</td>
    <td className='pl-4! pt-2! pb-8!'>Karnataka</td>
    <td className='pl-4! pt-2! pb-8!'>National Law School of India University</td>
    <td className='pl-4! pt-2! pb-8!'>State University</td>
    <td className='pl-4 align-top pt-2!'>Nagarbhavi, Bangalore-560072</td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-8!'>9</td>
    <td className='pl-4! pt-2! pb-8!'>Karnataka</td>
    <td className='pl-4! pt-2! pb-8!'>Rajiv Gandhi University of Health Science</td>
    <td className='pl-4! pt-2! pb-8!'>State University</td>
    <td className='pl-4 align-top pt-2!'>Jayanagar, Bangalore-560041</td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-8!'>10</td>
    <td className='pl-4! pt-2! pb-8!'>Karnataka</td>
    <td className='pl-4! pt-2! pb-8!'>Sri Jagadhguru Murugarajendra University</td>
    <td className='pl-4! pt-2! pb-8!'>Private University</td>
    <td className='pl-4 align-top pt-2!'>SJM Campus, Chitradurga-577502</td>
</tr>

                    </tbody>
                </table>
                <div className='flex'>
                    <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 10 of 29 entries</p>
                    <p className='ml-80 -mt-6! '>previous</p>
                    <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
                    <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p>
                    <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p>
                    {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p> */}
                    {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p> */}
                    {/* <p className='ml-6 -mt-5! text-sm! '>...</p> */}
                    {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>36</p> */}
                    <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
                </div>
            </div>
        )
}

export default Ombudspersons