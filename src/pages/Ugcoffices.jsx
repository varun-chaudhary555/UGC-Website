import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { IoLocationSharp ,IoCall} from "react-icons/io5";
import { Link } from 'react-router-dom';


function Ugcoffices() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />
                
                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/ugc_office</button>
                <h2 className='absolute top-14 left-18 text-white'>UGC Ofiices</h2>
                <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <h2 className='w-220 mr-2 pl-14 pt-12 text-orange-500!'>UGC Offices</h2>
                    <div>
                        <div className='border h-52 ml-20'>
                            <div className='h-10 bg-gray-300'>
                                <h6 className='flex h-10 items-center pl-2'>University Grants Commission (UGC) - Head Office</h6>
                            </div>
                            <p className='text-sm pl-4 mt-2 flex'><IoLocationSharp className='mt-1 mr-2 text-orange-500' />University Grants Commission (UGC)</p>
                            <p className='text-sm -mt-2! pl-4'>Bahadur Shah Zafar Marg,</p>
                            <p className='text-sm -mt-4! pl-4'>New Delhi - 110002.</p>
                            <p className='text-sm pl-4 mt-2 flex'><IoCall className='mt-1 mr-2 text-orange-500' />011-23604127, 011-23604200</p>
                        </div>
                        <div className='flex'>
                            <div className='border h-52 w-1/2 ml-20 mt-4 mb-12'>
                                <div className='h-10 bg-gray-300'>
                                    <h6 className='flex h-10 items-center pl-2'>University Grants Commission (UGC)</h6>
                                </div>
                                <p className='text-sm pl-4 mt-2 flex'><IoLocationSharp className='mt-1 mr-2 text-orange-500' />University Grants Commission (UGC)</p>
                                <p className='text-sm -mt-2! pl-4'>35- Ferozeshah Road</p>
                                <p className='text-sm -mt-4! pl-4'>New Delhi - 110001.</p>
                                <p className='text-sm pl-4 mt-2 flex'><IoCall className='mt-1 mr-2 text-orange-500' />011-23604650</p>
                            </div>
                            <div className='border h-52 w-1/2 ml-6 mt-4 mb-12'>
                                <div className='h-10 bg-gray-300'>
                                    <h6 className='flex h-10 items-center pl-2'>University Grants Commission (UGC)</h6>
                                </div>
                                <p className='text-sm pl-4 mt-2 flex'><IoLocationSharp className='mt-1 mr-2 text-orange-500' />University Grants Commission (UGC)</p>
                                <p className='text-sm -mt-2! pl-4'>NET Bureau,</p>
                                <p className='text-sm -mt-4! pl-4'>South Campus of Delhi University,</p>
                                <p className='text-sm -mt-4! pl-4'>Benito Jhuarez Marg,</p>
                                <p className='text-sm -mt-4! pl-4'>New Delhi - 110021.</p>
                                <p className='text-sm -mt-4! pl-4'>Near Dhola Kuan</p>
                                <p className='text-sm pl-4 mt-2 flex'><IoCall className='mt-1 mr-2 text-orange-500' />011-24115426, 011-24112276</p>
                            </div>
                        </div>
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

export default Ugcoffices