import React from 'react'

function Allregulations() {
  return (
    <div>
        <p className="text-[#ff6c3a] text-3xl ml-90 -mt-14! font-bold">All <span className="text-[#364c66]">Regulations</span></p>
        <div className='flex mt-16'>
        <div className='border-[0.9px] ml-16 border-red-500 h-60 w-64'><img src="https://www.ugc.gov.in/Content/images/Regulations/2.jpg" alt="" />
        <h6 className='ml-4 mt-2'>Universities</h6>
          <p className='pl-4 pt-2 pb-2 text-gray-600!'>
            Read More</p>
        </div>
        <div className='border-[0.9px] ml-6 border-red-500 h-60 w-64'><img src="https://www.ugc.gov.in/Content/images/Regulations/3.jpg" alt="" />
        <h6 className='ml-4 mt-2'>Colleges</h6>
          <p className='pl-4 pt-2 pb-2 text-gray-600!'>
            Read More</p>
        </div>
        <div className='border-[0.9px] ml-6 border-red-500 h-60 w-64'>
         <img src="https://www.ugc.gov.in/Content/images/Regulations/students.jpg" className='mr-10!' alt="" />
        <h6 className='ml-4 mt-2'>Student Centric</h6>
          <p className='pl-4 pt-2 pb-2 text-gray-600!'>
            Read More</p>
        </div>
        </div>
        <div className='flex mt-6 mb-30'>
        <div className='border-[0.9px] ml-16 border-red-500 h-60 w-64'><img src="https://www.ugc.gov.in/Content/images/Regulations/faculty.jpg" alt="" />
        <h6 className='ml-4 mt-2'>Faculty Centric</h6>
          <p className='pl-4 pt-2 pb-2 text-gray-600!'>
            Read More</p>
        </div>
        <div className='border-[0.9px] ml-6 border-red-500 h-60 w-64'><img src="https://www.ugc.gov.in/Content/images/Regulations/4.jpg" alt="" />
        <h6 className='ml-4 mt-2'>StandAlone</h6>
          <p className='pl-4 pt-2 pb-2 text-gray-600!'>
            Read More</p>
        </div>
        </div>
    </div>
  )
}

export default Allregulations