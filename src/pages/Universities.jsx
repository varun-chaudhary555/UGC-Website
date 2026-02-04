import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Universities() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-36 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/Universities Details</button>
                {/* <h2 className='absolute top-14 left-18 text-white'>Tenders</h2> */}
                <h5 className='absolute top-16 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div>
                <h2 className="text-[#364c66]! mt-10! ml-10 text-bolder!">Universities</h2>
                <div className='flex'>
                    <NavLink to="centraluniversity" className={({isActive})=>`duration-500 border hover:bg-gray-300 no-underline! hover:text-[#2e2b42]! px-4 py-2 rounded-full! ml-10! ${isActive ? "bg-[#ff6c3a] text-black " :  "bg-gray-100 text-black"}`}>Central University</NavLink>
                    <NavLink to="stateuniversities" className={({isActive})=>`duration-500 border hover:bg-gray-300 no-underline! hover:text-[#2e2b42]! px-4 py-2 rounded-full! ml-2! ${isActive ? "bg-[#ff6c3a] text-black " :  "bg-gray-100 text-black"}`}>State Universities</NavLink>
                    <NavLink to="deemedtobeuniversities" className={({isActive})=>`duration-500 border hover:bg-gray-300 no-underline! hover:text-[#2e2b42]! px-4 py-2 rounded-full! ml-2! ${isActive ? "bg-[#ff6c3a] text-black " :  "bg-gray-100 text-black"}`}>Deemed to be Universities</NavLink>
                    <NavLink to="stateprivateuniversities" className={({isActive})=>`duration-500 border hover:bg-gray-300 no-underline! hover:text-[#2e2b42]! px-4 py-2 rounded-full! ml-2! ${isActive ? "bg-[#ff6c3a] text-black " :  "bg-gray-100 text-black"}`}>State Private Universities</NavLink>
                    <NavLink to="viewall" className={({isActive})=>`duration-500 border hover:bg-gray-300 no-underline! hover:text-[#2e2b42]! px-4 py-2 rounded-full! ml-2! ${isActive ? "bg-[#ff6c3a] text-black " :  "bg-gray-100 text-black"}`}>View All</NavLink>
                    <NavLink to="/viewotherdetail" className={({isActive})=>`duration-500 border hover:bg-gray-300 no-underline! hover:text-[#2e2b42]! px-4 py-2 rounded-full! ml-2! ${isActive ? "bg-[#ff6c3a] text-black " :  "bg-gray-100 text-black"}`}>View Other detail</NavLink>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Universities