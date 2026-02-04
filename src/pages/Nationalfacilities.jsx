import React from 'react'
import { FaCheckCircle,FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Nationalfacilities() {
 return (
     <div>
       <div className='relative'>
         <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />
         
         <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/National Facilities</button>
         <h2 className='absolute top-14 left-18 text-white'>National Facilities</h2>
         <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
       </div>
       <div className='flex'>
         <div>
           <h2 className='w-220 mr-2 pl-14 pt-12 text-orange-500!'>National Facilities</h2>
           <p className='pl-14'>The UGC has established 4 National Facilities Centre in the selected universities as per details given below:-</p>
           <h6 className='pl-14 pt-2'>Western Regional Instrumentation Centre, Mumbai</h6>
           <p className='pl-14'>This Centre was established by University Grants Commission in 1978 under the administrative control of Mumbai University with the objective to provide training to USIC staff and students for proper use and maintenance of instruments conducting advanced study programmes such as workshops, seminars for teachers, Research workers from University, National Laboratories and industries etc.
<br /><br />
Recommendations of the XI Plan Review Committee. </p>
<h6 className='pl-14 pt-8'>M.S.T. Radar Facilities, Sri Venkateshwar University, Tirupati</h6>
           <p className='pl-14'>The University Grants has established a centre for MST Radar application in the Physics Department SU University, Tirupati in 1990 to utilize the National MST Radar facilities created at Gadanki by the Researchers and Scientists in Indian Universities.
<br /><br />
Recommendations of the XI Plan Review Committee. </p>
<h6 className='pl-14 pt-8'>Inter University Centre for Humanities and Social Sciences IUCHSS, Indian Institute of Advanced Study, Shimla</h6>
           <p className='pl-14'>The main objectives of the Centre are to invite teachers from universities and colleges to the institute as associate of the IUC, organise "Research Seminars" for researchers and young teachers in University and Colleges and to organize "Study weeks" for discussing important problems of National and international interest.
<br /><br />
Recommendations of the XI Plan Review Committee. </p>
<h6 className='pl-14 pt-8'>Crystal Growth Centre, Anna University, Chennai</h6>
           <p className='pl-14'>This centre was established in 1982 with the following objectives.
<br /><br /><p className='text-sm pl-10'>
1.To develop facilites for growth and growth and characterization of crystal of technological and industrial importance. <br />
2.To bridge the gap between needy industries and Lab. Res. <br />
3.To cater the needs of various institutions in India with regard to requirements of special crystal for Research etc.</p>
Recommendations of the XI Plan Review Committee. </p>
         </div>
         <div className='w-94'>
           <div className='pl-10 pt-16 w-80 mr-60 pr-10 h-98'>
             <div className='border h-full border-gray-400'>
               <div className="border-t-4 border-orange-500">
                 <h5 className="pt-4 pl-4 font-semibold">ABOUT UGC</h5>
               <div className="w-12 ml-4 h-1 bg-orange-500 mt-2"></div>
               <div>
                 <Link to="/genesis" style={{ textDecoration: "none" }}  className='mt-4 ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Genesis</Link>
                           <Link to="/mandate" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>Mandate</Link>
                           <Link to="/ugcact" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>UGC ACT 1956</Link>
                           <Link to="/logo" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>Logo</Link>
                           <Link to="/ugcbureaus" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>Bureaus</Link>
                           <Link to="/ugcoffices" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>UGC Offices</Link>
                           <Link to="/interuniversitycentre" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>Inter University Centres</Link>
                           <Link to="/nationalfacilities" style={{textDecoration:"none"}}  className='ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500'/>National Facilities</Link>
               </div>
 
               </div>
 
             </div>
           </div>
         </div>
 
       </div>
     </div>
   )
}

export default Nationalfacilities