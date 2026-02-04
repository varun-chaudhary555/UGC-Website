import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';

function Comissiondecision() {
 return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Decision by the Commission</button>
        <h1 className='absolute top-14 left-18 text-white'>Decision by the Commission</h1>
        <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
      </div>
      <div className='flex'>
        <div>
          <h2 className='w-220 mr-2 pl-18 pt-10 text-orange-500! pb-2'>Minutes of Commission Meetings</h2>
          <NavLink to="minutes" style={{textDecoration:"none"}} className={({isActive})=>`border rounded-t-md ml-18 px-1 py-2 h-6 w-12 ${isActive ? "bg-orange-500 text-white" : "bg-white text-black"}`}>Minutes</NavLink>
          <NavLink to="emergentmeeting" style={{textDecoration:"none"}} className={({isActive})=>   `border rounded-t-md px-1 py-2  h-6 w-12 ${isActive ? "bg-orange-500 text-white" : "bg-white text-black"}`}>Emergent Meeting</NavLink>
          <NavLink to="e-circulation" style={{textDecoration:"none"}} className={({isActive})=>`border rounded-t-md px-1 py-2  h-6 w-12 ${isActive ? "bg-orange-500 text-white" : "text-black" }`}>e-circulation</NavLink>
          <Outlet/>
        </div>
        <div className='w-94'>
          <div className='pl-10 pt-16 w-80 mr-60 pr-10 h-98'>
            <div className='border h-full border-gray-400'>
              <div className="border-t-4 border-orange-500">
                <h5 className="pt-4 pl-4 font-semibold">COMISSION</h5>
                <div className="w-12 ml-4 h-1 bg-orange-500 mt-2"></div>
                <div>
                  <a href="/Comissiondecision" style={{ textDecoration: "none" }} className='text-sm mt-4 ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Decision by the Commission</a>
                  <Link to="/comissionmember" style={{ textDecoration: "none" }} className='text-sm mt-2  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Commission Members</Link>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comissiondecision