import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Viewotheruniversities() {
  return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / HEI's</button>
        <h1 className='absolute top-14 left-18 text-white'>University Details</h1>
        <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
      </div>
      <div className='flex justify-end'>
        <Link to="/universities/centraluniversity" className="bg-[#ff6c3a] no-underline! duration-500 hover:bg-gray-100 text-white hover:text-[#2e2b42]! px-4 py-2 rounded-full! mr-16! mt-8!"> Back</Link>
      </div>
      <div>
      <h4 className='text-gray-700! mt-6 ml-20 font-bold!'>Central Universities</h4>
      <h3 className='border-[0.9px] ml-20 mr-20 mb-1!'></h3>
      <a href="" className='ml-20 text-blue-800! no-underline! font-bold! text-sm!'>       <FaArrowCircleRight className='inline-flex text-orange-500 mr-2 -mt-1' />Consolidated list of Central Universities as on 31.03.2023</a>
      </div>
      <div className='mt-16'>
      <h4 className='text-gray-700! mt-6 ml-20 font-bold!'>State Universities</h4>
      <h3 className='border-[0.9px] ml-20 mr-20 mb-1!'></h3>
      <a href="" className='ml-20 text-blue-800! block no-underline! font-bold! text-sm!'>       <FaArrowCircleRight className='inline-flex text-orange-500 mr-2 -mt-1' />Consolidated List of State Universities</a>
      <a href="" className='ml-20 text-blue-800! no-underline! font-bold! text-sm!'>       <FaArrowCircleRight className='inline-flex text-orange-500 mr-2 -mt-1' />State University List under section 12 B</a>
      </div>
      <div className='mt-16'>
      <h4 className='text-gray-700! mt-6 ml-20 font-bold!'>Demmed to be Universities</h4>
      <h3 className='border-[0.9px] ml-20 mr-20 mb-1!'></h3>
      <p className='text-sm ml-20'>Institutions of higher education which have been declared as Deemed to be Universities under Section 3 of the UGC Act, 1956</p>
      <a href="" className='ml-20 text-blue-800! block no-underline! font-bold! text-sm!'>       <FaArrowCircleRight className='inline-flex text-orange-500 mr-2 -mt-1' />Consolidated List of Deemed Universities as on 30-04-2023
</a>
      <a href="" className='ml-20 text-blue-800! no-underline! font-bold! text-sm!'>       <FaArrowCircleRight className='inline-flex text-orange-500 mr-1 -mt-1' /> Deemed University Information under section 12 B
</a>
      </div>
      <div className='mt-16'>
      <h4 className='text-gray-700! mt-6 ml-20 font-bold!'>
Private Universities</h4>
      <h3 className='border-[0.9px] ml-20 mr-20 mb-1!'></h3>
      <a href="" className='ml-20 text-blue-800! block no-underline! font-bold! text-sm!'>       <FaArrowCircleRight className='inline-flex text-orange-500 mr-1 -mt-1' /> Information Received from Private Universities for Inspection purpose</a>
      <a href="" className='ml-20 text-blue-800! block no-underline! font-bold! text-sm!'>       <FaArrowCircleRight className='inline-flex text-orange-500 mr-2 -mt-1' />Proforma for submission of information by State Private Universities for ascertaining their norms and standards</a>
      <a href="" className='ml-20 text-blue-800! block no-underline! font-bold! text-sm!'>       <FaArrowCircleRight className='inline-flex text-orange-500 mr-2 -mt-1' />Compliance Reports Submitted by Private Universities</a>
      <a href="" className='ml-20 text-blue-800! block no-underline! font-bold! text-sm!'>       <FaArrowCircleRight className='inline-flex text-orange-500 mr-2 -mt-1' />Proforma for seeking the information from the State (Public/Private) Universities for inclusion of names of Universities under Section 12-B of the UGC Act, 1956</a>
      <p className='text-gray-700! text-sm! font-bold! my-8! ml-20'>Public Notice on Private Universities</p>
      <p className='ml-20 mr-20'>It has come to the notice of the University Grants Commission that some of the State Private Universities have affiliated colleges and started off-campus centre(s) in violation of the UGC (Establishment of and Maintenance of Standards in Private Universities) Regulation, 2003 and against the judgment of Hon’ble Supreme Court in case of Prof. Yash Pal & Others vs. State of Chhattisgarh & Others. Some of these Universities are running these Centres on franchising basis also which is not allowed. <br /> <br />

The public at large and the student community in particular are therefore informed that as per the information available with the UGC as on date, There are following Private Universities established by the Acts of the Legislatures of different States:- <br /> <br />

These Universities are competent to award degrees as specified by UGC under Section 22 of the UGC Act with the approval of the statutory councils, wherever required through their main campus. Wherever the approval of the statutory council is not a pre-requisite to start a programme, the Universities are required to maintain the minimum standards regarding academic and physical infrastructure as laid down by the concerned statutory council.<br /> <br />

It is also informed that Private Universities cannot affiliate an institution/college. They cannot establish off campus centre(s) beyond the territorial jurisdiction of the concerned State. However, they can establish off-campus centre(s) within the concerned State after their existence of five years and with the prior approval of the University Grants Commission. So far, UGC has not approved any off campus centre(s) of any Private University.<br /> <br />

Course(s) under distance mode can be started by the private university only after the prior approval of the UGC.Information about the validity of the courses offered under distance mode may be obtained from Distance Education bureau of UGC, 35, Ferozshah Road, North Delhi-(ph no. 011- 23381050).<br /> <br />

Students/Public at large are advised to go through this website carefully at the time of taking admission and should clarify the status of the University from UGC before taking admission in any Private University other than those listed above<br /> <br />

Further, para 3.7 & 3.8 of the UGC (Establishment of and Maintenance of Standards in Private Universities) Regulations, 2003 are reproduced below for information of all the Private Universities: -<br /> <br />

3.7. A private University shall provide all the relevant information relating to the first degree and post-graduate degree/diploma programme(s) including the curriculum structure, contents, teaching and learning process, examination and evaluation system and the eligibility criteria for admission of students, to the UGC on a proforma prescribed by the UGC prior to starting of these programmes.<br /> <br />

3.8. The UGC on detailed examination of the information made available as well as the representations and grievances received by it from the students as well as concerned public relating to the deficiencies of the proposed programme(s) not conforming to various UGC Regulations, shall inform the concerned University about any shortcomings in respect of conformity to relevant regulations, for rectification. The University shall offer the programme(s) only after necessary rectification.<br /> <br />

A copy of the UGC (Establishment and Maintenance of Standards in Private Universities) Regulations, 2003 alongwith the proforma for submission of information by the Private University are annexed with the notice.</p>
<div className='flex justify-end'>
      <p className='text-gray-700! mt-10! mb-20! font-bold! mr-20!'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Secretary <br />
UGC, New Delhi</p></div>
      </div>
    </div>
  )
}

export default Viewotheruniversities