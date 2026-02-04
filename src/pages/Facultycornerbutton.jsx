import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'


function Facultycornerbutton() {
  return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-36 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home /  Faculty Corner</button>
                <h2 className='absolute top-14 left-18 text-white'> Faculty Corner</h2>
                {/* <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5> */}
            </div>
            <div className='flex'>
                <NavLink to="ugcresearchawards" style={{textDecoration:"none"}}  className={({isActive})=>`pl-16 pr-15 py-3 rounded! ml-16! text-black mt-18! ${isActive ?"bg-[#ff6c3a]! text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 ! hover:text-[#2e2b42]!"}`}>UGC Research Awards</NavLink>
            </div>
            <div className='flex'>
                <NavLink to="portals" style={{textDecoration:"none"}}  className={({isActive})=>`px-19 py-3 rounded! ml-16 text-black mt-2! ${isActive ?"bg-[#ff6c3a]! text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 ! hover:text-[#2e2b42]!"}`}>Portals / Helplines</NavLink>
            </div>
            <div className='flex'>
                <NavLink to="facultyregulations" style={{textDecoration:"none"}}  className={({isActive})=>`pl-24 pr-25 py-3 rounded! ml-16! mt-2! mb-4 text-black ${isActive ?"bg-[#ff6c3a]! h-14! text-white! " : "hover:bg-gray-300! duration-500 bg-gray-200 h-14! hover:text-[#2e2b42]!"}`}>Regulations
</NavLink>
                    <Outlet/>
            </div>
        </div>
    )
}

export default Facultycornerbutton