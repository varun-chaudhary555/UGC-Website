import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Ugcact() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />
                
                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/</button>
                <h2 className='absolute top-14 left-18 text-white'>UGC ACT 1956</h2>
                <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div className="flex gap-6">

                    {/* Text Section */}
                    <div className="w-4/4">
                        <h2 className="pl-14 pt-12 text-orange-500!">
                            UGC ACT 1956
                        </h2>

                        <p className="pl-14 font-semibold">
                            The University Grants Commission Act And Rules & Regulations Under The Act, 1956
                        </p>

                        <p className="pl-14 pt-2 pb-4">
                            This publication has been printed under the direction and control of UGC and the Govt. of India shall not be deemed responsible for the material reproduced in this copy of the UGC Act, 1956 and Rules and Regulations under the Act, which is strictly meant for official use and shall not be used for commercial purpose.
                        </p>
                        <p className="pl-14 pb-4 font-bold flex">
                           <FaRegFilePdf className='mt-1' /><a href="/ugc_act.pdf" target='_blank' style={{textDecoration:"none", color:"black"}}><p className='hover:text-green-400 duration-1000'> View UGC Act 1956 Details</p></a>  - <a href="/ugc_act_hindi.pdf" target='_blank' style={{textDecoration:"none", color:"black"}}><p className='hover:text-green-400 duration-1000'> (Hindi Version)</p></a>
                        </p>
                    </div>
                    <div className="w-1/4 pt-20 pl-10 ">
                        <img
                            src="https://www.ugc.gov.in/Content/images/MainPage/ugc_act.gif"
                            alt="UGC Act"
                            className=""
                        />
                    </div>
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

export default Ugcact