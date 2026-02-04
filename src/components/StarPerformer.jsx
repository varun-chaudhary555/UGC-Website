import React from 'react'
import { Link } from 'react-router-dom'

function StarPerformer() {
  return (
    <div>
        <h2 className='text-center mt-4 font-extrabold'><span className='text-orange-600'>Star Performer</span> of the Month</h2>
        <div className='flex justify-evenly mt-12'>
            <a href=""><img src="https://www.ugc.gov.in/Content/images/Star_Performer/0294894_Ms.-SUNITA.jpg" className='h-40' alt="" /></a>
            <a href=""><img src="https://www.ugc.gov.in/Content/images/Star_Performer/6018559_Umesh-Sharma-Jan-2025.jpg" className='h-40' alt="" /></a>
            <a href=""><img src="https://www.ugc.gov.in/Content/images/Star_Performer/3224992_Sridhar-Jagilinki-Assistant.jpg" className='h-40' alt="" /></a>
            <a href=""><img src="https://www.ugc.gov.in/Content/images/Star_Performer/1989216_Raj-Kumari-US.jpg" className='h-40' alt="" /></a>

        </div>
        <Link to="starperformer">
        <span className="block text-center mt-4">
                    <button className="bg-[#3f495a] hover:bg-gray-300 text-white hover:text-[#2e2b42]! px-8 py-2 rounded-full!">
                        View All
                    </button></span></Link>
    </div>
  )
}

export default StarPerformer