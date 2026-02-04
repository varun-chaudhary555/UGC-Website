import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'


function Studentcornerbutton() {
  return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-36 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home /  Student Corner</button>
                <h2 className='absolute top-14 left-18 text-white'> Student Corner</h2>
                {/* <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5> */}
            </div>
            <div className='flex'>
                <NavLink to="fellowships" style={{textDecoration:"none"}}  className={({isActive})=>`px-22 py-3 rounded! ml-16! text-black mt-18! ${isActive ?"bg-[#ff6c3a]! text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 ! hover:text-[#2e2b42]!"}`}>Fellowships</NavLink>
            </div>
            <div className='flex'>
                <NavLink to="scholarships" style={{textDecoration:"none"}}  className={({isActive})=>`px-21 py-3 rounded! ml-16 text-black mt-2! ${isActive ?"bg-[#ff6c3a]! text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 ! hover:text-[#2e2b42]!"}`}>Scholarships</NavLink>
            </div>
            <div className='flex'>
                <NavLink to="helplines" style={{textDecoration:"none"}}  className={({isActive})=>`pl-6 py-3 rounded! ml-16! pr-5! mt-2! mb-4 text-black ${isActive ?"bg-[#ff6c3a]! h-14! text-white! " : "hover:bg-gray-300! duration-500 bg-gray-200 h-14! hover:text-[#2e2b42]!"}`}>Portals/ Helplines for Students
</NavLink>
                    <Outlet/>
            </div>
        </div>
    )
}

export default Studentcornerbutton