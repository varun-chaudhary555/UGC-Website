import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'


function Heisviolatingregulations() {
   return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-36 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / HEIs Violating Regulations</button>
                <h2 className='absolute top-14 left-18 text-white'>HEIs Violating Regulations</h2>
                {/* <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5> */}
            </div>
            <div className='flex mt-6'>
                <NavLink to="listoffakeuniversities" style={{textDecoration:"none"}}  className={({isActive})=>`pl-3 py-3 rounded! ml-16! pr-20! text-black mt-8! ${isActive ?"bg-[#ff6c3a]! text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 ! hover:text-[#2e2b42]!"}`}>List of Fake Universities</NavLink>
            </div>
            <div className='flex'>
                <NavLink to="phdregulations" style={{textDecoration:"none"}}  className={({isActive})=>`pl-3 py-2.5 rounded! ml-16! pr-7! text-black mt-2! ${isActive ?"bg-[#ff6c3a]! text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 ! hover:text-[#2e2b42]!"}`}>List of HEIs not Following Ph.D <br /> Regulations</NavLink>
            </div>
             <div className='flex'>
                <NavLink to="ombudsperson" style={{textDecoration:"none"}}  className={({isActive})=>`pl-3 py-2.5 rounded! ml-16! pr-15! text-black mt-2! ${isActive ?"bg-[#ff6c3a]! text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 ! hover:text-[#2e2b42]!"}`}>List of HEIs not appointed <br /> Ombudsperson</NavLink>
            </div>
            <div className='flex mb-10'>
                <NavLink to="defaulterstateuniversities" style={{textDecoration:"none"}}  className={({isActive})=>`pl-3 py-2.5 rounded! ml-16! pr-7! text-black mt-2! h-16 ${isActive ?"bg-[#ff6c3a]! text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 ! hover:text-[#2e2b42]!"}`}>List of Defaulter State (Private) <br /> Universities</NavLink>
                    <Outlet/>
            </div>
        </div>
    )
}

export default Heisviolatingregulations