import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ComissionMember() {
  return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Comission Members</button>
        <h1 className='absolute top-14 left-18 text-white'>Comission Members</h1>
        <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
      </div>
      <div className='flex'>
        <div>
          <h2 className='w-220 mr-2 pl-18 pt-10 text-orange-500!'>Comission Members</h2>
          <h5 className='w-220 mr-2 pl-18 pt-2 text-gray-700!'>List of the Members of the University Grants Commission as on 15th April, 2025</h5>
          <table className=' ml-18 border mt-4 mb-12 border-gray-400'>
            <thead className='border-b-2!'>
              <tr>
                <th className='border-r! text-white bg-orange-500 pl-4! pr-10 py-3'>Comission Members</th>
                <th className='border-r! text-white bg-orange-500 px-4! py-3 pr-1!'>Phone no./Fax/Email</th>
                {/* <th className='border-r! text-white bg-orange-500 px-4! pr-10!'>created</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="https://www.ugc.gov.in/Content/images/CommissionMembers/Vineet_Joshi_Secretary.jpeg" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Dr. Vineet Joshi</p>
                    <p className='pl-10 -mt-4!'>
                      Chairperson, UGC (Additional Charge) <br />
                      University Grants Commission <br />
                      Bahadurshah Zafar Marg <br />
                      New Delhi-110002
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>cm.ugc@nic.in</td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Vice Chairman, UGC</p>
                    <p className='pl-10 -mt-4!'>
                      University Grants Commission <br />
                      Bahadurshah Zafar Marg <br />
                      New Delhi-110002
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>vcm.ugc@nic.in</td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="https://www.ugc.gov.in/Content/images/CommissionMembers/Vineet_Joshi_Secretary.jpeg" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Dr. Vineet Joshi</p>
                    <p className='pl-10 -mt-4!'>
                      Secretary <br />
                      (Department of Higher Education) Ministry of Education <br />
                      127-C, Shastri Bhawan <br />
                      New Delhi
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>secy.dhe@nic.in</td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Shri D. Anandan</p>
                    <p className='pl-10 -mt-4!'>
                      Additional Secretary <br />
                      Department of Expenditure <br />
                      Ministry of Finance <br />
                      Kartavya Bhawan-1, New Delhi
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>jspfc-1@gov.in</td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="https://www.ugc.gov.in/Content/images/CommissionMembers/Shri_Ashishkumar_Chauhan.jpg" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Shri Ashish Kumar Chauhan</p>
                    <p className='pl-10 -mt-4!'>
                      Chancellor <br />
                      University of Allahabad and MD & CEO <br />
                      National Stock Exchange <br />
                      Mumbai
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>
                  Ashish.chauhan@nse.co.in,<br />
                  Dl-md-office@nse.co.in,<br />
                  amishp@nse.co.in
                </td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="https://www.ugc.gov.in/Content/images/CommissionMembers/Badri_narayan.jpg" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Prof. Badri Narayan Tiwari</p>
                    <p className='pl-10 -mt-4!'>
                      Director and Professor <br />
                      G.B. Pant Social Science Institute <br />
                      University of Allahabad <br />
                      Prayagraj
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>badrinarayan.gbpssi@gmail.com</td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="https://www.ugc.gov.in/Content/images/CommissionMembers/prof_RKMittal.jpeg" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Prof. Raj Kumar Mittal</p>
                    <p className='pl-10 -mt-4!'>
                      Vice Chancellor <br />
                      Babasaheb Bhimrao Ambedkar University <br />
                      Lucknow, Uttar Pradesh
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>dr123mittal@yahoo.com</td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="https://www.ugc.gov.in/Content/images/CommissionMembers/Prof_SAM.jpg" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Prof. Sachidananda Mohanty</p>
                    <p className='pl-10 -mt-4!'>
                      Former Vice Chancellor <br />
                      Central University of Odisha
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>sachimohanty@yahoo.co.in</td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="https://www.ugc.gov.in/Content/images/CommissionMembers/Prof_SGW.jpg" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Prof. Shashikala Gulabrao Wanjari</p>
                    <p className='pl-10 -mt-4!'>
                      Vice-Chancellor <br />
                      National Institute of Educational Planning and Administration (NIEPA) <br />
                      New Delhi
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>vc@niepa.ac.in</td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="https://www.ugc.gov.in/Content/images/CommissionMembers/Sridhar_Vembu.jpg" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Shri Sridhar Vembu</p>
                    <p className='pl-10 -mt-4!'>
                      Zoho Corporation
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>svembu@zohocorp.com</td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="https://www.ugc.gov.in/Content/images/CommissionMembers/Prof_TANA_SHOWREN.png" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Prof. Tana Showren</p>
                    <p className='pl-10 -mt-4!'>
                      Department of History <br />
                      Rajiv Gandhi University <br />
                      Arunachal Pradesh
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>tana.showren@rgu.ac.in</td>
              </tr>

              <tr className='border-b-2!'>
                <td className='border-r-2! pl-4! py-4! w-120 flex'>
                  <img className='h-28 w-24' src="https://www.ugc.gov.in/Content/images/CommissionMembers/Ms_Vandana_%20Mishra.jpg" alt="" />
                  <div>
                    <p className='pl-10 font-bold'>Prof. Vandana Mishra</p>
                    <p className='pl-10 -mt-4!'>
                      Professor, Centre for Political Studies <br />
                      School of Social Sciences <br />
                      Jawaharlal Nehru University <br />
                      New Delhi
                    </p>
                  </div>
                </td>
                <td className='pl-4 align-top pt-2 border-r-2! w-110'>vandanamishra@jnu.ac.in</td>
              </tr>

            </tbody>
          </table>
          <Link to="/chairpersons" style={{textDecoration:"none"}} className='flex'>
                        <p className='ml-18 -mt-10! font-bold text-black '>
                        See also </p> <p className='hover:text-green-400! pb-12 text-black -mt-10! ml-2 duration-500'> List of Former Chairpersons/Vice-Chairpersons/Secretaries.</p></Link>
        </div>
        <div className='w-94'>
          <div className='pl-10 pt-16 w-80 mr-60 pr-10 h-98'>
            <div className='border h-full border-gray-400'>
              <div className="border-t-4 border-orange-500">
                <h5 className="pt-4 pl-4 font-semibold">COMISSION</h5>
                <div className="w-12 ml-4 h-1 bg-orange-500 mt-2"></div>
                <div>
                  <Link to="/comissiondecision" style={{ textDecoration: "none" }} className='text-sm mt-4 ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Decision by the Commission</Link>
                  <a href="/Comissionmember" style={{ textDecoration: "none" }} className='text-sm mt-2  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Commission Members</a>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComissionMember