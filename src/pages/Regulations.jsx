import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Regulations() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-36 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / UGC Regulations</button>
                <h2 className='absolute top-14 left-18 text-white'>UGC Regulations</h2>
                {/* <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5> */}
            </div>
            <div className='flex justify-end'>
                <a href="/">
                    <button className="bg-[#ff6c3a] duration-500 hover:bg-gray-100 text-white hover:text-[#2e2b42]! px-4 py-2 rounded-full! mr-16! mt-8!"> Back</button></a>
            </div>
            <div className='flex'>
                <NavLink to="ugcnewregulations" style={{textDecoration:"none"}}  className={({isActive})=>`pl-3 py-2.5 rounded! ml-16! pr-16! text-black mt-8! ${isActive ?"bg-[#ff6c3a]! text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 ! hover:text-[#2e2b42]!"}`}>UGC New Regulations</NavLink>
            </div>
            <div className='flex'>
                <NavLink to="allregulations" style={{textDecoration:"none"}}  className={({isActive})=>`pl-3 py-2.5 rounded! ml-16! pr-29! text-black mt-2! ${isActive ?"bg-[#ff6c3a]! text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 ! hover:text-[#2e2b42]!"}`}>All Regulations</NavLink>
            </div>
            <div className='flex'>
                <NavLink to="Archives" style={{textDecoration:"none"}}  className={({isActive})=>`pl-3 py-2.5 rounded! ml-16! pr-40! mt-2! text-black ${isActive ?"bg-[#ff6c3a]! h-11 text-white!" : "hover:bg-gray-300! duration-500 bg-gray-200 h-11! hover:text-[#2e2b42]!"}`}>Archives</NavLink>
                    <Outlet/>
            </div>
        </div>
    )
}

export default Regulations