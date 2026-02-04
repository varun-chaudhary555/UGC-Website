import React from 'react'
import { FaCheckCircle, FaArrowCircleRight ,FaLongArrowAltRight } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';

function Secretary() {
   return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Secretary</button>
                <h1 className='absolute top-14 left-18 text-white'>Secretary</h1>
                <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <h2 className='w-220 mr-2 pl-18 pt-10 text-orange-500! pb-4'>Prof. Manish R. Joshi, Secretary, University Grants Commission, New Delhi</h2>
                    <div className='flex'>
                        <img className='ml-22 h-30 w-44' src="https://www.ugc.gov.in/Content/images/MainPage/7259503_Secretary_UGC_Image.jpeg" alt="" />
                        <p className='ml-2'>Prof. Manish R. Joshi, a Post Graduate (MCS) from Pune University, India has obtained his Ph. D. degree from North Maharashtra University, Jalgaon, India. Prof Joshi has been awarded an esteemed National Award for outstanding efforts in translation of Popular Science and Technology for the year 2018 by the Department of Science and Technology of the Government of India.</p>
                    </div>
                    <p className='ml-18'>Prof. Joshi received the prestigious Post-Doctoral Fellowship award during 2008-2009 from the University of New Brunswick, Fredericton, Canada, which is the pioneer university in establishing Computer Science as a separate faculty. <br /> <br />

Since 1997, he has taught in the School of Computer Sciences of Kavayitri Bahinabai Chaudhari North Maharashtra University, Jalgaon, India. Prof. Joshi has experience teaching students from diverse educational and cultural backgrounds at various international institutions. He taught courses at Saint Mary's University, a Canadian university at Halifax, in a West African country, The Gambia. <br /><br />

His current research interests include Rough Set-based machine intelligence, Localization, Knowledge Discovery, and Natural Language Processing. He has completed various research projects and guided six research scholars leading to the doctoral degree award. During his stay in China, and Armenia, Dr. Joshi visited different universities in these countries and established academic associations. Prof. Manish R. Joshi has published over 100 research papers in journals of national and international repute as well as in national and international conference proceedings. He has edited an open-access e-book and special issues of international journals. He was invited by the Durban University of Technology, Durban, South Africa for research and collaboration. He is one of the trainers selected to work on the European Union Project "Establishment of Capacity Building Centers as a sustainable solution to raise the standards of teaching staff in Indian HEIs". <br /><br />

Prof Joshi visited the UK in October 2019 as one of the members of a study tour organized by the Government of India and the British Council of India under the AICTE-UKIERI Leadership Development Program. <br /> <br />

He has delivered several talks at reputed institutions on various topics of his interest. Prof. Joshi works as a program committee member of various international conferences as well as a reviewer of various reputed international journals. He is one of the executive council members of the Indian Society for Rough Sets. <br /> <br />

His articles on technology are published regularly in local languages in various Daily Newspapers. He has been frequently invited to deliver talks on All India Radio.</p>

<p className='ml-18 -mt-2! font-bold flex'>Email:- <p className='font-normal'>cm.ugc@nic.in</p> </p>
                            <p className='ml-18 -mt-8! font-bold flex -mb-4!'>Phone Number:- <p className='font-normal'>011-23234019</p> </p>
                            <a href='' style={{ textDecoration: "none" }} className='ml-18 hover:text-green-400! duration-500 text-black'>Chairman Secretariat</a>
                           <a href='' style={{ textDecoration: "none" }} className='ml-18 mb-10 mt-4 hover:text-green-400! duration-500 text-black font-bold text-sm flex'>Contact Details...
                           <a href="" style={{textDecoration:"none"}} className='ml-140 hover:text-green-400! duration-500 text-black font-bold text-sm flex'>Detailed profile...</a></a>

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

export default Secretary