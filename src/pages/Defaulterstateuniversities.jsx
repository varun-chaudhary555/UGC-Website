import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


function Defaulterstateuniversities() {
    return (
        <div>
            <h2 className='text-orange-500! text-center ml-30 font-bold! -mt-40!'>List of Defaulter State (Private) <br /> Universities</h2>
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
                        <th className='text-white bg-orange-500 pl-4! pr-10 py-3 w-120'>University Name</th>
                        <th className=' text-white bg-orange-500 pl-4! pr-10 py-2 w-48'>State</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b-2!'>
                        <td className='pl-4! pt-2! pb-4!'>1</td>
                        <td className='pl-4! pt-2! pb-4!'>Dev Sanskriti Vishwavidyalaya, Village - Sankra Kumhari, District – Durg – 490042, Chhattisgarh</td>
                        <td className='pl-4! pt-2! pb-4!'>CHHATTISGARH</td>
                    </tr>

                    <tr className='border-b-2!'>
                        <td className='pl-4! pt-2! pb-4!'>2</td>
                        <td className='pl-4! pt-2! pb-4!'>India International University of Legal Education and Research, Upasnagar, Sancoale, Airport Road, South Goa, Goa – 403710</td>
                        <td className='pl-4! pt-2! pb-4!'>GOA</td>
                    </tr>

                    <tr className='border-b-2!'>
                        <td className='pl-4! pt-2! pb-4!'>3</td>
                        <td className='pl-4! pt-2! pb-4!'>Plastindia International University, Dungra, GIDC, VAPI, Dist. Valsad – 396195</td>
                        <td className='pl-4! pt-2! pb-4!'>GUJARAT</td>
                    </tr>

                    <tr className='border-b-2!'>
                        <td className='pl-4! pt-2! pb-4!'>4</td>
                        <td className='pl-4! pt-2! pb-4!'>Team Lease Skills University, Tarsali-Vadodara Road, Tarsali Bypass, Vadodara – 390009, Gujarat.</td>
                        <td className='pl-4! pt-2! pb-4!'>GUJARAT</td>
                    </tr>

                    <tr className='border-b-2!'>
                        <td className='pl-4! pt-2! pb-4!'>5</td>
                        <td className='pl-4! pt-2! pb-4!'>Sri Jagadhguru Murugarajendra University, SJM Campus, Karnataka</td>
                        <td className='pl-4! pt-2! pb-4!'>KARNATAKA</td>
                    </tr>

                    <tr className='border-b-2!'>
                        <td className='pl-4! pt-2! pb-4!'>6</td>
                        <td className='pl-4! pt-2! pb-4!'>OPJS University, Rawatsar, Kunjila, Tehsil-Rajgarh, Distt. – Churu, Rajasthan.</td>
                        <td className='pl-4! pt-2! pb-4!'>RAJASTHAN</td>
                    </tr>

                    <tr className='border-b-2!'>
                        <td className='pl-4! pt-2! pb-4!'>7</td>
                        <td className='pl-4! pt-2! pb-4!'>Sikkim International University, P.O Sribadam, P.S. Kaluk, West Sikkim– 737 121</td>
                        <td className='pl-4! pt-2! pb-4!'>SIKKIM</td>
                    </tr>

                    <tr className='border-b-2!'>
                        <td className='pl-4! pt-2! pb-4!'>8</td>
                        <td className='pl-4! pt-2! pb-4!'>Smt. Manjira Devi University, Hitanu Dhanari, Dunda, Uttarkashi, Uttarakhand</td>
                        <td className='pl-4! pt-2! pb-4!'>UTTARAKHAND</td>
                    </tr>

                </tbody>
            </table>
            <div className='flex'>
                <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 8 of 8 entries</p>
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

export default Defaulterstateuniversities