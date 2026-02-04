import React from 'react'
import { BsBank,BsBuildingFill } from "react-icons/bs";
import { MdOutlineDesktopMac } from "react-icons/md";
import { Link } from 'react-router-dom';

function Detailofhei() {
  return (
          <div>
              <div className='w-[1260px] h-[466px] bg-[#2e2b41]'>
                  <div className="w-292 h-104 bg-white rounded-2xl ml-12 ">
                      <p className="text-[#ff6c3a] text-center text-3xl ml-12 pt-8 font-bold">Details of <span className="text-[#364c66]"> HEIs</span></p>
                      <div className='flex'>
                          <a href='' style={{ textDecoration: "none" }} className='border mt-8 ml-16 h-46 w-60 rounded-2xl hover:text-white! text-gray-700!  hover:bg-gray-700'>
                              <div className='border border-orange-500! -mt-0.5 mx-auto h-14 w-14 bg-orange-500 rounded-b-xl'><BsBank className='mx-auto mt-3 text-2xl text-white' /></div>
                              <div className=' text-lg font-semibold text-center mt-4'>
Central Universities</div>
                              <div className=' text-lg font- text-center mt-2'>57</div>
                          </a>
                          <a href='' className='no-underline! text-gray-700! border mt-8 ml-10 h-46 w-60 rounded-2xl hover:bg-gray-700 hover:text-white!'>
                              <div className='border border-orange-500! -mt-0.5 mx-auto h-14 w-14 bg-orange-500 rounded-b-xl'><BsBank className='mx-auto mt-3 text-2xl text-white' /></div>
                              <div className='text-lg font-semibold text-center mt-4'>State Universities</div>
                              <div className='text-lg text-center mt-2'>515</div>
                          </a>
                          <a href='' className='no-underline! text-gray-700! border mt-8 ml-10 h-46 w-60 rounded-2xl hover:bg-gray-700 hover:text-white!'>
                              <div className='border border-orange-500! -mt-0.5 mx-auto h-14 w-14 bg-orange-500 rounded-b-xl'><BsBuildingFill className='mx-auto mt-3 text-2xl text-white' /></div>
                              <div className=' text-lg font-semibold text-center mt-4'>
                                  Deemed to be Universities</div>
                                  <div className='text-lg text-center mt-2'>150</div>
                          </a>
                           <a href='' className='no-underline! mr-16 text-gray-700! border mt-8 ml-10 h-46 w-60 rounded-2xl hover:bg-gray-700 hover:text-white!'>
                              <div className='border border-orange-500! -mt-0.5 mx-auto h-14 w-14 bg-orange-500 rounded-b-xl'><BsBuildingFill className='mx-auto mt-3 text-2xl text-white' /></div>
                              <div className=' text-lg font-semibold text-center mt-4'>
                                  Private Universities</div>
                                  <div className='text-lg text-center mt-2'>546</div>
                          </a>
                      </div>
                      <div className="flex justify-center mt-8">
                          <Link to="/universities/centraluniversity" className="bg-gray-700 duration-500 hover:bg-gray-100 text-white no-underline! hover:text-[#2e2b42]! px-6 w-30 py-2.5 rounded-full!">View All</Link>
                      </div>
                  </div>
              </div>
          </div >
      )
}

export default Detailofhei