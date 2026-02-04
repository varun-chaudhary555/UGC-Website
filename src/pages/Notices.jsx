import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


function Notices() {
  return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/Notices</button>
        <h2 className='absolute top-14 left-18 text-white'>Notices</h2>
        <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
      </div>
      <div className='flex'>
        <div className='flex mt-14 ml-8'>
          <p className='text-sm'>show</p>
          <p className='flex ml-1 text-sm border-[0.9px] rounded px-1! h-6'>25 <MdKeyboardArrowDown className='mt-1' /></p>
          <p className='text-sm ml-1'>entries</p>
          <p className=' ml-216 flex'>Search: <p className='ml-1 border h-6  w-40'></p></p>

        </div>
      </div>
      <div>
        <table className=' ml-8 border -mt-6! mb-12 border-gray-400'>
          <thead className='border-b-2!'>
            <tr>
              <th className='border-r! text-white bg-orange-500 pl-4! pr-10 py-2'>Sr <br /> No</th>
              {/* <th className='border-r! text-white bg-orange-500 pl-4! pr-16 pt-4'>Tender Code</th> */}
              <th className='border-r! text-white bg-orange-500 px-4! pt-4 pr-130! whitespace-nowrap'>Title</th>
              <th className='border-r! text-white bg-orange-500 px-4! pr-10!'>Date</th>
              {/* <th className='px-4! text-white bg-orange-500 pr-10!'>Last <br /> Date</th> */}
            </tr>
          </thead>
          <tbody>
            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>1</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: New Delhi World Book Fair 2026.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2026-01-<br />05</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>2</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  Compliance by HEIs under The Immigration and Foreigners Act, 2025" and the "Immigration and Foreigners Rules, 2025" regarding registration of Incoming Foreign Students - Submission of Form -II.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2026-01-<br />02</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>3</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: FAQs on the UGC Framework for Universities to Conduct Examinations for SWAYAM Courses (issued vide D.O.F. No. 1-8/2017 (SWAYAM) dated 27th August, 2024).
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />31</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>4</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC Public Notice regarding: Participation of Higher Education Institutions (HEIs) in the Erasmus+ Programme.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />30</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>5</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Inviting Nominations for Faculty Development Programmes (FDPs) on Community-Based Participatory Research (CBPR) at select Malaviya Mission Teacher Training Centres (MMTTCs).
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />26</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>6</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Quiz Competitions on MyGov Platform during Republic Day Celebrations 2026.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />26</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>7</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Submission of Report on Observance of "Sexual Harassment Prevention Week".
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />26</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>8</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Observance of Swami Vivekananda's Birth Anniversary (National Youth Day) on 12th January, 2026 - Organization of "Run for Swadeshi" Programme.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />26</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>9</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Nasha Mukt Bharat Abhiyan (NMBA)- Pledge and Related Activities.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />26</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>10</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Observance of Veer Baal Diwas 2025 in Higher Education Institutions (HEIs).
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />24</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>11</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Pariksha Pe Charcha 2026.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />24</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>12</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Compliance with the Hon'ble Supreme Court's Order Dated 7th November, 2025 in Suo Moto Writ Petition (Civil) No. 5 of 2025 IN RE: "CITY HOUNDED BY STRAYS, KIDS PAY PRICE".
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />18</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>13</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC Public Notice regarding: Sarva Bharatiya Shiksha Peeth, Near S. K. Choultary, Devanur Main Road, Vijaya Nagara, Tumkur-572102, Karnataka is not recognised under Section 2(f) or Section 3 of the UGC Act nor empowered to award any degree as per Section 22 of the UGC Act, 1956.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />17</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>14</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC Public Notice regarding: National Backward Krushi Vidypeeth, Tadwal, Tal. Akkalkot, District-Solapur, Maharashtra is not recognised under Section 2(f) or Section 3 of the UGC Act nor empowered to award any degree as per Section 22 of the UGC Act, 1956.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />17</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>15</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC Public Notice regarding: National Institute of Management Solution, Delhi, now (NIMS) is not recognised under Section 2(f) or Section 3 of the UGC Act nor empowered to award any degree as per Section 22 of the UGC Act, 1956.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />17</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>16</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Bal Vivah Mukt Bharat (BVMB) Campaign from 27th November 2025 to 08th March, 2026.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />12</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>17</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Request to HEIs for identification of SWAYAM MOOCs for the January 2026 Semester.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />09</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>18</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: 16 Days of Annual Activism for Ending Gender-Based Violence observed globally from 25 November to 10 December.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />06</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>19</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Organizing Institutional Programmes/Workshops to Promote Women's Participation and Empowerment in Higher Education.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />06</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>20</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC Public Notice regarding: Invitation for Expression of Interest (EoI) for Development of MOOCs on "Introduction to PM Gati Shakti" for the SWAYAM Platform before 4th January, 2026
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />04</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>21</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Follow-up actions regarding Mission LiFE - Display of Mission LiFE Logo and Availability of Course Content.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />03</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>22</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Learn One More Bharatiya Bhasha Guidelines.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-12-<br />02</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>23</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Timely Conduct of Exams and Issuance of Academic Awards to Students by Higher Education Institutions.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-11-<br />26</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>24</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Celebration of Constitution Day on 26th November, 2025
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-11-<br />24</td>
            </tr>

            <tr className='border-b-2!'>
              <td className='border-r-2! pl-2! -mt-4! pb-8!'>25</td>
              <td className='pl-4 align-top pt-2 border-r-2! w-5xl'>
                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                  UGC letter regarding: Launch of the Revamped MoSPI Website.
                </a>
              </td>
              <td className='pl-3! border-r-2! pb-4'>2025-11-<br />21</td>
            </tr>

          </tbody>
        </table>
      </div>
      <div className='flex'>
        <p className='ml-10 -mt-6! text-sm!'>Showing 1 to 25 of 2783 entries</p>
        <p className='ml-140 -mt-6! '>previous</p>
        <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p>
        <p className='ml-6 -mt-5! text-sm! '>...</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>112</p>
        <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
      </div>
    </div>
  )
}

export default Notices