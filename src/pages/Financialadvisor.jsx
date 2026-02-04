import React from 'react'
import { FaCheckCircle, FaArrowCircleRight ,FaLongArrowAltRight } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';

function Financialadvisor() {
 return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Financial Advisor</button>
                <h1 className='absolute top-14 left-18 text-white'>Financial Advisor</h1>
                <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <h3 className='w-220 mr-2 pl-18 pt-10 text-orange-500! pb-4'>Shri Sudeep Singh Jain</h3>
                    <div className='flex'>
                        <img className='ml-22 h-60 ' src="https://www.ugc.gov.in/Content/images/MainPage/8565971_SSJain.jpg" alt="" />
                        <p className='ml-2'>Mr. Sudeep Singh Jain is an Engineering Graduate from University of Rajasthan with MBA qualification. He is a ‘Group A’ officer from 1993 batch of Indian Engineering Services. He belongs to organised cadre of Indian Post and Telecom Engineering Services (P&T-Building Work Services). He has got more than 27 years experience of ‘Group A’ service with Government of India. He has held various responsible positions in Department of Telecom/BSNL, viz. Superintendent Engineer, Director etc. across length and breadth of the country. <br /> <br />He has played a pivotal role in implementation of World Bank assisted project at National Disaster Management Authority (NDMA) while working as Deputy Project</p>
                    </div>
                    <p className='ml-18 -mt-4!'>Director on deputation basis. His key area of interest/strength includes Project Management, Communication Technology, Disaster Management, Budgeting, Estimation and Evaluation of schemes. <br /> <br /></p>

<p className='ml-18 -mt-2! font-bold flex'>Email:- <p className='font-normal'>fa-sectt@ugc.gov.in</p> </p>
                            <p className='ml-18 -mt-8! font-bold flex -mb-4!'>Phone Number:- <p className='font-normal'>011-23604241</p> </p>
                            <a href='' style={{ textDecoration: "none" }} className='ml-18 hover:text-green-400! duration-500 text-black'>Financial Advisor Secretariat</a>
                           <a href='' style={{ textDecoration: "none" }} className='ml-18 mb-10 mt-4 hover:text-green-400! duration-500 text-black font-bold text-sm flex'>Contact Details...
                           </a>

                </div>
                <div className='w-94'>
                          <div className='pl-10 pt-16 w-80 mr-60 pr-10 h-98'>
                            <div className='border h-full border-gray-400'>
                              <div className="border-t-4 border-orange-500">
                                <h5 className="pt-4 pl-4 font-semibold">ORGANIZATION</h5>
                                <div className="w-12 ml-4 h-1 bg-orange-500 mt-2"></div>
                                <div>
                                  <Link to="/chairman" style={{ textDecoration: "none" }} className='text-sm mt-4 ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Chairman</Link>
                                  <Link to="/vicechairman" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Vice Chairman</Link>
                                  <Link to="/secretary" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Secretary</Link>
                                  <Link to="/financialadvisor" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Financial Advisior</Link>
                                  <Link to="/jointsecretaries" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Joint Secretaries</Link>
                                  <Link to="/deputysecretaries" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Deputy Secretaries</Link>
                                  <Link to="/undersecretaries" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Under Secretaries</Link>
                                  <Link to="/educationofficers" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Education Officers</Link>
                
                                </div>
                
                              </div>
                
                            </div>
                          </div>
                        </div>
            </div>
        </div>
    )
}

export default Financialadvisor