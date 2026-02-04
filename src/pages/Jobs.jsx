import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


function Jobs() {
  return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/Jobs</button>
        <h2 className='absolute top-14 left-18 text-white'>Jobs</h2>
        <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
      </div>
      <div>
        <h2 className='w-220 mr-2 pl-20 pt-12 text-orange-500!'>Jobs</h2>
      </div>
      <div>
        <h3 className='w-220 mr-2 text-center pl-98 pt-12 -mb-8! text-red-500!'>Apply Now</h3>
      </div>
      <div className='flex'>
        <div className='flex mt-14 ml-20'>
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
              <th className='border-r! text-white bg-orange-500 pl-4! pr-16 pt-4'>Jobs Code</th>
              <th className='border-r! text-white bg-orange-500 px-4! pt-4 pr-138! whitespace-nowrap'>Jobs Title</th>
              <th className='border-r! text-white bg-orange-500 px-4! pr-10!'>Start <br /> Date</th>
              <th className='px-4! text-white bg-orange-500 pr-10!'>Last <br /> Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>1</td>
              <td className='border-r-2! px-4 pb-8!'>44/2025 <br /></td>
              <td className='pl-4 -pt-2! border-r-2! w-90'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  Extension of the timelines for submission of online application for the 11 Domain Professionals (Various Functions of the Commission) on contractual/project basis.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>06-12- <br />2025</td>
              <td className='pl-3! pb-4'>20-12- <br />2025</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>2</td>
              <td className='border-r-2! px-4 pb-8!'>42/2025 (Admn. I/C) <br /></td>
              <td className='pl-4 -pt-2! border-r-2! w-90'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  FINAL RESULT FOR THE POST OF DOMAIN PROFESSIONAL (LEGAL) Reference Advertisement - 42/2025 (Admn. I/C) dated 27 September 2025
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>06-12- <br />2025</td>
              <td className='pl-3! pb-4'>06-12- <br />2025</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>3</td>
              <td className='border-r-2! px-4 pb-8!'>42/2025 (Admn. I/C) <br /></td>
              <td className='pl-4 -pt-2! border-r-2! w-90'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  FINAL RESULT FOR THE POST OF DOMAIN PROFESSIONAL (SOCIAL MEDIA SPECIALIST) Reference Advertisement - 42/2025 (Admn. I/C) dated 27 September 2025
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>06-12- <br />2025</td>
              <td className='pl-3! pb-4'>06-12- <br />2025</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>4</td>
              <td className='border-r-2! px-4 pb-8!'>43/2025 <br /></td>
              <td className='pl-4 -pt-2! border-r-2! w-90'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  University Grants Commission, New Delhi, invites online applications for appointment on Deputation basis for the Staff Car Driver (SCD) (Ordinary Grade).
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>06-12- <br />2025</td>
              <td className='pl-3! pb-4'>06-12- <br />2025</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>5</td>
              <td className='border-r-2! px-4 pb-8!'>42/2025 <br /></td>
              <td className='pl-4 -pt-2! border-r-2! w-90'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  Advertisement for the total 17 posts of 11 "Domain Professionals (Various Functions of the Commission), 01 Domain Professional (Social Media Specialist) and 05 Domain Professional (Legal)" on contractual/project basis.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>27-09- <br />2025</td>
              <td className='pl-3! pb-4'>11-10- <br />2025</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>6</td>
              <td className='border-r-2! px-4 pb-8!'>41/2025 <br /></td>
              <td className='pl-4 -pt-2! border-r-2! w-90'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  EXTENSION OF LAST DATE FOR RECEIPT OF APPLICATIONS FOR THE POST OF DIRECTOR, CONSORTIUM FOR EDUCATIONAL COMMUNICATION (CEC), NEW DELHI.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>18-09- <br />2025</td>
              <td className='pl-3! pb-4'>30-09- <br />2025</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>7</td>
              <td className='border-r-2! px-4 pb-8!'>41/2025 <br /></td>
              <td className='pl-4 -pt-2! border-r-2! w-90'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  Advertisement for the post of Director, Consortium for Educational Communication (CEC), New Delhi
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>09-07- <br />2025</td>
              <td className='pl-3! pb-4'>18-08- <br />2025</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>8</td>
              <td className='border-r-2! px-4 pb-8!'>7-1/2025-U1A <br /></td>
              <td className='pl-4 -pt-2! border-r-2! w-90'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  Call for Nominations for the post of Vice-Chairman, University Grants Commission.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>06-06- <br />2025</td>
              <td className='pl-3! pb-4'>10-07- <br />2025</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>9</td>
              <td className='border-r-2! px-4 pb-8!'>39/2025 <br /></td>
              <td className='pl-4 -pt-2! border-r-2! w-90'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  List of Selected Candidates against the posts of three "Young Professionals (Various Functions of the Commission), one Senior Hindi Translator & one Junior Hindi Translator" on contractual/project basis.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>24-03- <br />2025</td>
              <td className='pl-3! pb-4'>24-03- <br />2025</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>10</td>
              <td className='border-r-2! px-4 pb-8!'>40/2025 <br /></td>
              <td className='pl-4 -pt-2! border-r-2! w-90'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  Advertisement for the post of Director, UGC-DAE Consortium for Scientific Research, Indore.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>14-02- <br />2025</td>
              <td className='pl-3! pb-4'>27-03- <br />2025</td>
            </tr>


          </tbody>
        </table>
      </div>
      <div className='flex'>
        <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 10 of 136 entries</p>
        <p className='ml-122 -mt-6! '>previous</p>
        <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p>
        <p className='ml-6 -mt-5! text-sm! '>...</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>14</p>
        <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
      </div>
    </div>
  )
}

export default Jobs