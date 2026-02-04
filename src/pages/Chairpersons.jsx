import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';

function Chairpersons() {
  return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Former Commission Members</button>
        <h1 className='absolute top-14 left-18 text-white'>Former Commission Members</h1>
        <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
      </div>
      <div className='flex'>
        <div>
          <h3 className='w-220 mr-2 pl-18 pt-10 text-orange-500! pb-4'>List of Former Chairpersons /Vice-Chairpersons /Secretaries</h3>
          <NavLink to="formerchairpersons" style={{textDecoration:"none"}} className={({isActive})=>`border rounded-t-md ml-18 px-1 py-2 bg-orange-500 h-6 w-12 ${isActive ? "bg-orange-500 text-white" : "bg-white text-black"}`}>Former Chairpersons</NavLink>
          <NavLink to="formervicechairpersons" style={{textDecoration:"none"}} className={({isActive})=>   `border rounded-t-md px-1 py-2  h-6 w-12 ${isActive ? "bg-orange-500 text-white" : "bg-white text-black"}`}>Former Vice - Chairpersons
</NavLink>
          <NavLink to="formersecretaries" style={{textDecoration:"none"}} className={({isActive})=>`border rounded-t-md px-1 py-2  h-6 w-12 ${isActive ? "bg-orange-500 text-white" : "text-black" }`}>Former Secrataries</NavLink>
          <Outlet/>
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

export default Chairpersons