import React from 'react'
import { FaGraduationCap, FaRupeeSign } from "react-icons/fa";
import { MdOutlineDesktopMac } from "react-icons/md";
import { Link } from 'react-router-dom';

function Studentcorner() {
    return (
        <div>
            <div className='w-[1260px] h-[442px] bg-[#2e2b41]'>
                <div className="w-292 h-98 bg-white rounded-2xl ml-12 ">
                    <p className="text-[#ff6c3a] text-center text-3xl ml-12 pt-8 font-bold">Student <span className="text-[#364c66]"> Corner</span></p>
                    <div className='flex'>
                        <a href='' style={{ textDecoration: "none" }} className='border mt-12 ml-16 h-36 w-60 rounded-2xl hover:text-white! text-gray-700!  hover:bg-gray-700'>
                            <div className='border border-orange-500! -mt-0.5 mx-auto h-14 w-14 bg-orange-500 rounded-b-xl'><FaGraduationCap className='mx-auto mt-3 text-3xl text-white' /></div>
                            <div className=' text-lg font-semibold text-center mt-4'>Fellowships</div>
                        </a>
                        <a href='' className='no-underline! text-gray-700! border mt-12 ml-10 h-36 w-60 rounded-2xl hover:bg-gray-700 hover:text-white!'>
                            <div className='border border-orange-500! -mt-0.5 mx-auto h-14 w-14 bg-orange-500 rounded-b-xl'><FaRupeeSign className='mx-auto mt-3 text-2xl text-white' /></div>
                            <div className='text-lg font-semibold text-center mt-4'>Scholarships</div>
                        </a>
                        <a href='' className='no-underline! text-gray-700! border mt-12 ml-10 h-36 w-60 rounded-2xl hover:bg-gray-700 hover:text-white!'>
                            <div className='border border-orange-500! -mt-0.5 mx-auto h-14 w-14 bg-orange-500 rounded-b-xl'><MdOutlineDesktopMac className='mx-auto mt-3 text-2xl text-white' /></div>
                            <div className=' text-lg font-semibold text-center mt-4'>
                                Portals / Helplines</div>
                        </a>
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link to="/studentcornerbutton" target='_blank' className="bg-gray-700 no-underline! duration-500 hover:bg-gray-100 text-white hover:text-[#2e2b42]! pl-8 w-30 py-2.5 rounded-full!">View All</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Studentcorner